#!/usr/bin/env python3
"""
Script to convert all GIF files in a directory to MP4 format at highest quality using moviepy
"""

import os
import glob
from moviepy import VideoFileClip
from pathlib import Path

def convert_gif_to_mp4(gif_path, output_dir=None, quality='high'):
    """
    Convert a GIF file to MP4 format at highest quality
    
    Args:
        gif_path (str): Path to the input GIF file
        output_dir (str): Directory to save the MP4 file (optional)
        quality (str): Quality setting for the output
    """
    try:
        # Load the GIF
        print(f"Loading GIF: {gif_path}")
        clip = VideoFileClip(gif_path)
        
        # Create output path
        gif_name = Path(gif_path).stem
        if output_dir:
            output_path = os.path.join(output_dir, f"{gif_name}.mp4")
        else:
            output_path = gif_path.replace('.gif', '.mp4')
        
        # Convert to MP4 with highest quality settings
        print(f"Converting to MP4: {output_path}")
        
        # Use high quality settings:
        # - codec: libx264 (most compatible and high quality)
        # - audio: False (GIFs don't have audio)
        # - bitrate: High bitrate for quality
        # - preset: slower preset for better compression efficiency
        clip.write_videofile(
            output_path,
            codec='libx264',
            audio=False,
            bitrate='8000k',  # High bitrate for quality
            preset='slow',    # Slower encoding for better quality
            ffmpeg_params=['-crf', '18']  # Constant Rate Factor - 18 is very high quality
        )
        
        # Close the clip to free memory
        clip.close()
        
        print(f"Successfully converted: {gif_path} -> {output_path}")
        return output_path
        
    except Exception as e:
        print(f"Error converting {gif_path}: {str(e)}")
        return None

def convert_all_gifs_in_directory(directory_path):
    """
    Convert all GIF files in the specified directory to MP4 format
    
    Args:
        directory_path (str): Path to the directory containing GIF files
    """
    # Find all GIF files in the directory
    gif_pattern = os.path.join(directory_path, "*.gif")
    gif_files = glob.glob(gif_pattern)
    
    if not gif_files:
        print(f"No GIF files found in {directory_path}")
        return
    
    print(f"Found {len(gif_files)} GIF files to convert:")
    for gif_file in gif_files:
        print(f"  - {os.path.basename(gif_file)}")
    
    print("\nStarting conversion process...")
    
    successful_conversions = 0
    failed_conversions = 0
    
    for gif_file in gif_files:
        result = convert_gif_to_mp4(gif_file)
        if result:
            successful_conversions += 1
        else:
            failed_conversions += 1
        print("-" * 50)
    
    print(f"\nConversion Summary:")
    print(f"  Successful: {successful_conversions}")
    print(f"  Failed: {failed_conversions}")
    print(f"  Total: {len(gif_files)}")

if __name__ == "__main__":
    # Directory containing the GIF files
    target_directory = r"c:\dev\github\itweedie\itweedie.github.io\content\251113-mscc-send-email-without-service-account"
    
    print("GIF to MP4 Converter")
    print("=" * 50)
    print(f"Target directory: {target_directory}")
    
    # Check if directory exists
    if not os.path.exists(target_directory):
        print(f"Error: Directory {target_directory} does not exist!")
        exit(1)
    
    # Start the conversion process
    convert_all_gifs_in_directory(target_directory)
    
    print("\nConversion process completed!")