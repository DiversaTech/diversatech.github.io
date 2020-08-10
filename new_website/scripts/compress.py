import os
import sys
from PIL import Image

verbose = True

def compress_single(directory, name, verbose=False):
	path = os.path.join(directory, name)
	size = os.stat(path).st_size

	new_name = "min_" + name
	new_path = os.path.join(directory, new_name)

	picture = Image.open(path)
	picture.save(new_name, "JPEG", optimize=True, quality=85) #no less than quality=60

	new_size = os.stat(new_path).st_size
	compression_ratio = (size - new_size) / size

	size, new_size = round(size / 10**6, 2), round(new_size / 10**6, 2)

	if verbose:
		print("{0} compressed from {1}M to {2}M... {3}%".format(name, size, new_size, int(compression_ratio * 100)))
	
	return size, new_size

def main():
	"""
	dependencies: pip install Pillow

	usage: python compress.py

	NOTE: currently only compresses JPG and JPEG files
	"""

	print("Starting...")

	directory = os.getcwd()
	passed, total, before_size, after_size = 0, 0, 0, 0

	for file in os.listdir(directory):
		if os.path.splitext(file)[1].lower() in ['.jpg', '.jpeg']:
			total += 1
			try:
				before, after = compress_single(directory, file, verbose)
				before_size += before
				after_size += after
				passed += 1
			except Exception as e:
				print(file, e)

	print("{}/{} files compressed".format(passed, total))
	print("\nJPEG Compression: {0}%".format(round((before_size - after_size)/before_size * 100, 2)))
	print("Completed!")

if __name__ == "__main__":
	main()
