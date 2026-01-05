#!/bin/bash
# cleanup-docs-components.sh

DOCS_COMPONENTS="apps/docs/components"
PACKAGES_COMPONENTS="packages/components/react-shadcn/src/components"

# List of folders to remove (exist in both)
FOLDERS_TO_REMOVE=(
  "avatars"
  "components"
  "data"
  "decorative"
  "disclosure"
  "forms"
  "grid"
  "inputs"
  "micro"
  "modals"
  "motion-core"
  "native"
  "navigation"
  "page"
  "search"
  "sections"
  "tooltips"
  "web-performance"
)

for folder in "${FOLDERS_TO_REMOVE[@]}"; do
  if [ -d "$DOCS_COMPONENTS/$folder" ]; then
    echo "Removing $DOCS_COMPONENTS/$folder..."
    rm -rf "$DOCS_COMPONENTS/$folder"
  else
    echo "Folder $DOCS_COMPONENTS/$folder does not exist, skipping."
  fi
done

echo "Cleanup complete."
