for FILE in $(git ls-files ./img); do
    git grep $(basename "$FILE") > /dev/null || echo "would remove $FILE"
done

