import {muscles} from './muscles.js';
const region=(id,paths)=>`<g class="muscle ${muscles.find(m=>m.id===id)?.priority?'priority':''}" data-muscle="${id}" tabindex="0" role="button" aria-label="Show ${muscles.find(m=>m.id===id).name} exercises" aria-pressed="false"><title>${muscles.find(m=>m.id===id).name}</title>${paths.map(d=>`<path d="${d}"/>`).join('')}</g>`;
const symmetric=(id,d)=>region(id,[d])+region(id,[]).replace('</g>',`<path d="${d}" transform="translate(240 0) scale(-1 1)"/></g>`);
const outline=`<path class="silhouette" d="M108 56 C94 46 97 15 106 9 Q120 1 134 9 C143 15 146 46 132 56 L134 70 Q146 79 164 83 Q181 89 185 105 L194 155 Q197 174 202 190 L216 237 219 253 214 266 209 265 206 252 202 265 198 262 199 242 187 214 171 178 161 144 155 164 157 206 164 240 163 278 157 318 151 351 155 390 149 435 149 449 158 461 Q160 467 151 469 L131 467 128 453 128 428 124 388 125 357 122 327 120 279 118 327 115 357 116 388 112 428 112 453 109 467 89 469 Q80 467 82 461 L91 449 91 435 85 390 89 351 83 318 77 278 76 240 83 206 85 164 79 144 69 178 53 214 41 242 42 262 38 265 34 252 31 265 26 266 21 253 24 237 38 190 Q43 174 46 155 L55 105 Q59 89 76 83 Q94 79 106 70 Z"/><path class="anatomy-lines" d="M108 56 Q120 63 132 56 M103 15 Q120 10 137 15 M101 34 104 44 M139 34 136 44"/>`;
export function bodyMap(back=false){let s=outline;
if(!back){
s+=symmetric('upper-chest','M117 87 Q103 80 85 88 L81 101 Q96 107 117 100 Z');
s+=symmetric('chest','M117 104 Q98 111 81 105 L82 125 Q98 142 117 128 Z');
s+=symmetric('front-delts','M80 88 Q66 89 61 104 L58 121 69 115 77 102 Z');
s+=symmetric('side-delts','M59 108 Q52 120 51 139 L59 147 72 124 74 113 66 120 Z');
s+=symmetric('biceps','M61 143 Q76 129 76 147 L68 177 58 193 51 185 54 159 Z');
s+=symmetric('forearms','M50 190 58 198 44 233 36 242 31 236 40 212 Z');
s+=region('core',['M100 137 117 134 117 151 100 150 Z','M123 134 140 137 140 150 123 151 Z','M100 155 117 155 117 172 101 171 Z','M123 155 140 155 139 171 123 172 Z','M103 176 117 177 117 194 104 192 Z','M123 177 137 176 136 192 123 194 Z','M104 196 117 199 117 217 109 212 Z','M123 199 136 196 131 212 123 217 Z','M86 139 96 146 98 191 105 216 87 204 89 177 Z','M154 139 144 146 142 191 135 216 153 204 151 177 Z']);
s+=symmetric('quads','M86 227 Q104 222 115 241 L114 275 106 326 99 341 91 332 84 290 80 256 Z');
s+=`<path class="anatomy-lines" d="M97 357 97 426 M143 357 143 426"/>`;
s+=`<path class="anatomy-lines" d="M120 83V129 M90 211 106 226 120 246 134 226 150 211 M89 243 99 291 100 323 M151 243 141 291 140 323 M93 345Q100 350 107 345 M133 345Q140 350 147 345"/>`;
}else{
s+=region('upper-back',['M108 69 118 75 118 125 100 139 83 106 78 91 Z','M132 69 122 75 122 125 140 139 157 106 162 91 Z']);
s+=symmetric('rear-delts','M77 88 Q59 94 57 113 L54 134 65 139 80 116 89 105 Z');
s+=symmetric('lats','M83 117 99 145 115 135 116 169 110 202 89 217 91 177 Z');
s+=symmetric('triceps','M56 142 67 145 77 130 77 151 67 177 58 191 50 180 Z');
s+=symmetric('forearms','M49 187 59 195 46 228 38 243 31 238 38 214 Z');
s+=region('glutes',['M88 220 Q99 210 117 215 L117 256 Q96 271 80 254 L82 235 Z','M123 215 Q141 210 152 220 L158 235 160 254 Q144 271 123 256 Z']);
s+=symmetric('hamstrings','M81 261 Q99 276 116 261 L112 295 106 331 97 342 89 329 83 296 Z');
s+=symmetric('calves','M92 352 Q102 348 109 356 L112 382 106 405 100 421 92 405 87 382 Z');
s+=`<path class="anatomy-lines" d="M120 76V211 M108 180 99 209 M132 180 141 209 M120 218V257 M89 272 99 322 M151 272 141 322 M98 424 98 451 M142 424 142 451"/>`;
}
return `<figure class="body-view"><svg viewBox="0 0 240 480" aria-label="${back?'Back':'Front'} muscle map" xmlns="http://www.w3.org/2000/svg">${s}</svg><figcaption>${back?'POSTERIOR / BACK':'ANTERIOR / FRONT'}</figcaption></figure>`;
}
