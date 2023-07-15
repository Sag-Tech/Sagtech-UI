#!/bin/bash
mkdir -p reports
current_time=$(date "+%Y.%m.%d-%H.%M.%S")
npx jest --coverage --coverageReporters=text-summary | tee "reports/coverage-$current_time.txt"
coverage=$(grep 'All files' "reports/coverage-$current_time.txt" | awk '{print $4}' | sed 's/%//')
threshold=90
if (( $(echo "$coverage < $threshold" | bc -l) )); then
  echo "Code coverage is below $threshold%"
  exit 1
fi