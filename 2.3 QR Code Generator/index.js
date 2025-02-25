import { input } from '@inquirer/prompts';
import * as qr from 'qr-image'
import * as fs from 'fs';

const answer = await input({ message: 'Qual a URL para o seu site?' });

var qr_svg = qr.image(answer, { type: 'svg' });
qr_svg.pipe(fs.createWriteStream('url.svg'));

fs.writeFileSync("url.txt", answer, ); 
