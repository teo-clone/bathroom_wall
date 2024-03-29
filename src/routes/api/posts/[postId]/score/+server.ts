import { db } from "$lib/db";
import { fail, json } from "@sveltejs/kit";

export const PATCH = async ({ params, request }) => {

    const id = params.postId;

    const body = await request.json();
    const change: number = body.change;

    if (!change || Math.abs(change) > 2) {
        return json(fail(400, { message: 'Invalid value for \'change\' in the request body' }));
    }

    const postData = await db.post.findUnique({
        where: {
            id: id
        }
    });

    if (!postData) {
        return json(fail(400, { message: `Post with id ${id} not found in the db` }));
    }

    await db.post.update({
        where: {
            id: id
        },
        data: {
            score: postData.score + change
        }
    });

    return json({ message: `Updated post score from: ${postData.score} to: ${postData.score + change}` });
}