import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.join(process.cwd(), 'src/assets/imgs');
const srcDir = path.join(process.cwd(), 'src');

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
            const ext = path.extname(fullPath);
            const webpPath = fullPath.replace(new RegExp(ext + '$', 'i'), '.webp');

            console.log(`Optimizing: ${fullPath} -> .webp`);

            try {
                await sharp(fullPath)
                    .webp({ quality: 80, effort: 6 })
                    .toFile(webpPath);

                fs.unlinkSync(fullPath);
            } catch (err) {
                console.error(`Failed to optimize: ${fullPath}`, err);
            }
        }
    }
}

function updateVueAndJsFiles(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            updateVueAndJsFiles(fullPath);
        } else if (file.endsWith('.vue') || file.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('.png') || content.includes('.jpg') || content.includes('.jpeg')) {
                content = content.replace(/\.png/g, '.webp')
                    .replace(/\.jpg/g, '.webp')
                    .replace(/\.jpeg/g, '.webp');
                fs.writeFileSync(fullPath, content);
                console.log(`Updated paths in: ${fullPath}`);
            }
        }
    }
}

async function main() {
    console.log('Starting image optimization...');
    await processDirectory(assetsDir);
    console.log('Image optimization complete.');

    console.log('Updating Vue and JS files...');
    updateVueAndJsFiles(srcDir);
    console.log('Update complete.');
}

main();
