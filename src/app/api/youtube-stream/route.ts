import { NextResponse } from 'next/server'
import ytdl from 'ytdl-core'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const videoId = searchParams.get('videoId')

  if (!videoId) {
    return NextResponse.json({ error: 'Video ID is required' }, { status: 400 })
  }

  try {
    const info = await ytdl.getInfo(videoId)
    const audioFormat = ytdl.chooseFormat(info.formats, { 
      quality: 'highestaudio',
      filter: 'audioonly' 
    })

    return NextResponse.json({ streamUrl: audioFormat.url })
  } catch (error) {
    console.error('YouTube stream error:', error)
    return NextResponse.json({ error: 'Failed to get stream URL' }, { status: 500 })
  }
} 