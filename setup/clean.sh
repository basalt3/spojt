#!/bin/bash

# Setup script to remove template files and prepare for custom development

echo "🧹 Cleaning up template files..."

# Remove all files in /components directory (but keep the directory)
if [ -d "src/components" ]; then
    echo "Removing components..."
    rm -rf src/components/*
    echo "✅ Components directory cleaned"
fi

# Remove /resources/constants directory
if [ -d "src/resources/constants" ]; then
    echo "Removing constants directory..."
    rm -rf src/resources/constants
    echo "✅ Constants directory removed"
fi

# Remove /resources/data directory
if [ -d "src/resources/data" ]; then
    echo "Removing data directory..."
    rm -rf src/resources/data
    echo "✅ Data directory removed"
fi

# Remove /resources/spojt.config.js file
if [ -f "src/resources/spojt.config.js" ]; then
    echo "Removing spojt.config.js..."
    rm src/resources/spojt.config.js
    echo "✅ spojt.config.js removed"
fi

# Empty custom.css file (keep the file but clear content)
if [ -f "src/resources/custom.css" ]; then
    echo "Emptying custom.css..."
    > src/resources/custom.css
    echo "✅ custom.css emptied"
fi

echo "🎉 Setup complete! Your repository is ready for custom development."
echo "📝 Next steps:"
echo "   1. Run 'bun install' to install dependencies"
echo "   2. Run 'bun run dev' to start development server"
echo "   3. Start building your custom components and styles"
