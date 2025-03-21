import { NextResponse } from 'next/server'
import { posts } from '../route'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const post = posts.find(p => p.id === params.slug)
  
  if (!post) {
    return new Response('Post not found', { status: 404 })
  }

  return NextResponse.json(post)
} 