import https from "https";
import {constantCase} from "change-case";
import fs from "fs";
const cheerio = require('cheerio');

const DOCS_HOST = 'docs.aws.amazon.com';
const DOCS_PATH = '/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html';

console.log("Downloading...");

const downloadAwsDocs = (path: string) => {
    return new Promise((resolve, reject) => {
        const options = {   
            host: DOCS_HOST,
            protocol: "https:",
            path,
          };

        https.get(options, function(res) {
            console.log("Got response: " + res.statusCode);
            let responseData = "";
            res.on('data', (data) => {
                responseData += data;
            });
            res.on('end', () => {
                resolve(responseData);
            });
          }).on('error', function(err) {
            console.log("Got error: " + err.message);
            reject(err);
          });
    });
};

interface NamespaceInfo {
    description: string, constantName: string, namespace: string;
}

const x = downloadAwsDocs(DOCS_PATH)
    .then(html => {
        const $ = cheerio.load(html);
        const encounteredConstantNames = new Set();
        const records = $(".table-contents table").find("tr").toArray().map((trEl: any) => {
            const record = $(trEl).find("td p").toArray().map((pEl: any) => $(pEl).text());
            let constantName = constantCase(record[1] ?? "")
                .replace("D_DO_S", "DDOS"
                ).replace("IO_T", "IOT")
                .replace("F_SX", "FSX")
                .replace("GP_US", "GPUS");
            if (encounteredConstantNames.has(constantName)) {
                constantName = "";
            }
            encounteredConstantNames.add(constantName);
            return {
                description: record[0],
                constantName,
                namespace: record[1],
            };
        }) as NamespaceInfo[];
        const output = `// from https://${DOCS_HOST}${DOCS_PATH}\nexport const MetricNamespaces = {\n` + records.filter(record => record.constantName).map(record => `\t${record.constantName}: {name: "${record.namespace}", description: "${record.description}"},`).join("\n") + "\n};\n";
        fs.writeFileSync("./src/aws-cloudwatch/managed-metric-namespaces.ts", output);
        console.log(" namespaces found");
    });


