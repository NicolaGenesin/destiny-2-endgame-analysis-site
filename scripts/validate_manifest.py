#!/usr/bin/env python3
import json
from pathlib import Path

manifest = json.loads(Path('resource-manifest.json').read_text(encoding='utf-8'))
required = ['generated_at', 'project_title', 'repo_name', 'strategy', 'source_document', 'tech_stack']
missing = [key for key in required if key not in manifest]
if missing:
    raise SystemExit(f'Missing manifest keys: {missing}')
source = manifest['source_document']
for key in ['doc_key', 'canonical_source_url', 'best_score', 'latest_score']:
    if key not in source:
        raise SystemExit(f'Missing source_document key: {key}')
print('Manifest OK')
