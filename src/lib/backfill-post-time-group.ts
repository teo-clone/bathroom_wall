// // to run this script: cd src/lib && npx tsx backfill-post-time-group.ts

// import { db } from "./db";
// import { dateToTimeGroup } from "./utils/timeUtils";

// const backfillTimeGroup = async () => {
//     const postsToFix = await db.post.findMany({

//     });

//     for (let post of postsToFix) {
//         await db.post.update({
//             where: {
//                 id: post.id
//             },
//             data: {
//                 timeGroup: dateToTimeGroup(post.date)
//             }
//         });
//     }
// }

// backfillTimeGroup()
//     .catch((e) => {
//         throw e;
//     })
//     .finally(async () => {
//         await db.$disconnect();
//     });
