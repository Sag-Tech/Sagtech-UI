#!/bin/bash
jest --coverage --coverageReporters=text-summary | tee coverage.txt
coverage=$(grep 'All files' coverage.txt | awk '{print $4}' | sed 's/%//')
threshold=90
if (( $(echo "$coverage < $threshold" | bc -l) )); then
  echo "Code coverage is below $threshold%"
  exit 1
fi