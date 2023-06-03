import { NextResponse } from "next/server";

const parsedImages = ( obj ) => {
  const imgLinks = [];
  if (obj) {
    obj.map(element => {
        if (element.type == 'photo'){
            imgLinks.push(element.media_url_https);
        }
    })
    return imgLinks;
  }
  return undefined
}

export async function POST ( request ) {

  const res = await request.json()
  const RAPID_API_KEY = await request.headers.get('rapid-api-key')

  try {
    const response = await fetch(`https://twitter135.p.rapidapi.com/v2/TweetDetail/?id=${res.id}`, {
      method: 'GET', 
      headers: {
        "X-RapidAPI-Key": RAPID_API_KEY,
        "X-RapidAPI-Host": "twitter135.p.rapidapi.com",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
        "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
      }
    })
    const result = await response.json()

    const itemContent = result.data.threaded_conversation_with_injections_v2.instructions[0].entries[0].content.itemContent
    const legacy = itemContent.tweet_results.result.legacy
    const tweet = {
      data: {
          "user_name": itemContent.tweet_results.result.core.user_results.result.legacy.name,
          "user_id": itemContent.tweet_results.result.core.user_results.result.legacy.screen_name,
          "user_image": itemContent.tweet_results.result.core.user_results.result.legacy.profile_image_url_https,
          "tweet": legacy.full_text,
          "date": legacy.created_at,
          "fav": legacy.favorite_count,
          "retweet": legacy.retweet_count,
          "comment": legacy.reply_count,
          "media": legacy.extended_entities && legacy.extended_entities.media ? parsedImages(legacy.extended_entities.media) : null,
          }
      }

    return NextResponse.json({ tweet })

  } catch (error) {

    console.log("ERROR" + error)
    return NextResponse.json(error)

  }
  
}

