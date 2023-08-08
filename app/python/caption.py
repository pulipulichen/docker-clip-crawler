import argparse
from youtube_transcript_api import YouTubeTranscriptApi
import os
from urllib.parse import urlparse, parse_qs

def extract_youtube_id(url):
    parsed_url = urlparse(url)
    
    if parsed_url.netloc == "youtu.be":
        return parsed_url.path[1:]
    
    query_params = parse_qs(parsed_url.query)
    if 'v' in query_params:
        return query_params['v'][0]
    
    return None

def download_caption(id):
    try:
        print(id)
        if id.startswith('http'):
            id = extract_youtube_id(id)
            print(id)

        # print('Downloading')
        # Create a YouTube object
        transcript_list = YouTubeTranscriptApi.list_transcripts(id)
        print(transcript_list)
        srt = YouTubeTranscriptApi.get_transcript(id, languages=['en', 'zh-TW', 'zh-CN', 'zh-HK'])
        print(srt)
        
    except Exception as e:
        raise Exception("Error: ", str(e))

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="YouTube Caption Downloader")
    parser.add_argument("id", help="YouTube video ID or URL")
    
    args = parser.parse_args()
    
    download_caption(args.id)