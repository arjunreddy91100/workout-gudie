// Direct video links researched September 9, 2026. Counts are snapshots, not a live ranking.
const video=(id,title,creator='Jeff Nippard',views=null)=>({url:`https://www.youtube.com/watch?v=${id}`,title,creator,views});
const upper=video('-iWjdKWNpNg','The Fastest Way To Blow Up Your Upper Chest (4 Science-Based Steps) + Sample Program','Jeff Nippard','3.4M');
const back=video('jLvqKgW-_G8','The Best And Worst Back Exercises (Ranked By Science)');
const shoulders=video('SgyUoY0IZ7A','The Best And Worst Shoulder Exercises');
export const muscleVideos={
 'upper-chest':[upper],chest:[upper],lats:[back],'upper-back':[back],
 'side-delts':[shoulders],'rear-delts':[shoulders],'front-delts':[shoulders],
 biceps:[video('GNO4OtYoCYk','The Best And Worst Biceps Exercises')],
 triceps:[video('OpRMRhr0Ycc','The Best & Worst TRICEPS Exercises (Ranked Using Science)')],
 forearms:[video('3xHrOLzTLYI','How To Build Huge Forearms | Training Science Explained')],
 core:[video('QdIutxfm_hU','The BEST 10 Minute Ab Workout For Six Pack Abs (HIT EACH AREA!)','Jeremy Ethier')],
 quads:[video('kIXcoivzGf8','The Best & Worst QUAD Exercises (Ranked Using Science)')],
 hamstrings:[video('Lh3iMIcbkBQ','Grow Your Hamstrings 1.5x Faster (New Research)','Jeff Nippard','2.63M')],
 glutes:[video('3ryh7PNhz3E','The Best & Worst Glute Exercises (According To Science)')],
 calves:[video('xK6DoHBXTdw','This Is Why Your Calves Won’t Grow')]
};
export const tryFirst={
 'upper-chest':['incline-db','upward-fly'],chest:['flat-db','chest-machine'],lats:['pulldown','single-pull'],'upper-back':['chest-row','cable-row'],
 'side-delts':['lateral-cable','lateral-db'],'rear-delts':['reverse-deck','rear-cable'],'front-delts':['shoulder-press'],biceps:['incline-curl','hammer'],
 triceps:['overhead-ext','pressdown'],forearms:['hammer','carry'],core:['cable-crunch','ab-wheel'],quads:['hack','leg-press'],hamstrings:['rdl','seated-curl'],glutes:['hip-thrust','reverse-lunge'],calves:['standing-calf','seated-calf']
};
export const youtubeSearch=(query,popular=false)=>`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}${popular?'&sp=CAM%253D':''}`;
