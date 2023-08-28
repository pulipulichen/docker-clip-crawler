#!/bin/bash

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker and try again."
    exit 1
fi

# Input file containing URLs and output paths
input_file="./output/input.txt"

# Read the input file line by line using a different file descriptor
while IFS= read -r line <&3; do
    IFS=, read -r url output_path <<< "$line"
    url=$(echo "$url" | tr -d ' ')
    output_path=$(echo "$output_path" | tr -d ' ')

    # Extract directory from output path
    output_dir=$(dirname "$output_path")

    # Create the output directory if it doesn't exist
    mkdir -p "$output_dir"

    docker run singlefile "$url" > "$output_path"

    if [ $? -eq 0 ]; then
        echo "Downloaded $url and saved to $output_path"
    else
        echo "Error downloading $url"
    fi
done 3< "$input_file"
