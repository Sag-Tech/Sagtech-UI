#!/bin/bash
mkdir -p reports
current_time=$(date "+%Y.%m.%d-%H.%M.%S")
npx jest --coverage --coverageReporters=text-lcov > "reports/coverage-$current_time.lcov"