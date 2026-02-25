import fs from 'fs';
import path from 'path';

function updateVueAndJsFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            updateVueAndJsFiles(fullPath);
        } else if (file.endsWith('.vue') || file.endsWith('.js') || file.endsWith('.json')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('.png')) {
                content = content.replace(/\.png/g, '.webp');
                fs.writeFileSync(fullPath, content);
                console.log(`Updated paths in: ${fullPath}`);
            }
        }
    }
}

updateVueAndJsFiles(path.join(process.cwd(), 'src'));
console.log('Finished updating .png to .webp in src directory.');
