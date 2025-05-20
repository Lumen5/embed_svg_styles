# SVG Style Inliner

This tool uses the `svgo` library to inline styles in SVG files. It processes all SVG files in the `svgs` directory and updates them with inlined styles.

## Prerequisites

- Node.js and npm should be installed on your system.

## Setup

1. Clone the repository and navigate to the project directory.
2. Install the required dependencies by running:

   ```bash
   npm install
   ```

## Usage

1. Ensure your SVG files are located in the `svgs` directory.
2. Run the tool to process the SVG files:

   ```bash
   node tools/embedStyles.js
   ```

3. The tool will inline styles in each SVG file and overwrite the original files.

## Verification

To verify the changes, you can open any SVG file in a browser to see the inlined styles:

```bash
open svgs/sample.svg
```

## Troubleshooting

- Ensure the `svgs` directory exists and contains SVG files.
- Check for any error messages in the console output for guidance on resolving issues.
