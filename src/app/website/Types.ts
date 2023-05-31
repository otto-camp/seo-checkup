export interface LighthouseResult {
  captchaResult: string;
  kind: "pagespeedonline#result";
  id: string;
  loadingExperience: {
    id: string;
    metrics: {
      [key: string]: {
        percentile: number;
        distributions: {
          min: number;
          max: number;
          proportion: number;
        }[];
        category: string;
      };
    };
    overall_category: string;
    initial_url: string;
  };
  originLoadingExperience: {
    id: string;
    metrics: {
      [key: string]: {
        percentile: number;
        distributions: {
          min: number;
          max: number;
          proportion: number;
        }[];
        category: string;
      };
    };
    overall_category: string;
    initial_url: string;
  };
  lighthouseResult: {
    requestedUrl: string;
    finalUrl: string;
    lighthouseVersion: string;
    userAgent: string;
    fetchTime: string;
    environment: {
      networkUserAgent: string;
      hostUserAgent: string;
      benchmarkIndex: number;
    };
    runWarnings: string[];
    configSettings: {
      emulatedFormFactor: string;
      locale: string;
      onlyCategories: string[];
    };
    audits: {
      [key: string]: {
        id: string;
        title: string;
        description: string;
        score: number | null;
        scoreDisplayMode: string;
        displayValue: string;
        explanation: string;
        errorMessage: string;
        warnings: string[];
        details: {
          [key: string]: any;
        };
      };
    };
    categories: {
      [key: string]: {
        id: string;
        title: string;
        description: string;
        score: number | null;
        manualDescription: string;
        auditRefs: {
          id: string;
          weight: number;
          group: string;
        }[];
      };
    };
    categoryGroups: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
    runtimeError: {
      code: string;
      message: string;
    };
    timing: {
      total: number;
    };
    i18n: {
      rendererFormattedStrings: {
        varianceDisclaimer: string;
        opportunityResourceColumnLabel: string;
        opportunitySavingsColumnLabel: string;
        errorMissingAuditInfo: string;
        errorLabel: string;
        warningHeader: string;
        auditGroupExpandTooltip: string;
        passedAuditsGroupTitle: string;
        notApplicableAuditsGroupTitle: string;
        manualAuditsGroupTitle: string;
        toplevelWarningsMessage: string;
        scorescaleLabel: string;
        crcLongestDurationLabel: string;
        crcInitialNavigation: string;
        lsPerformanceCategoryDescription: string;
        labDataTitle: string;
      };
    };
  };
  analysisUTCTimestamp: string;
  version: {
    major: number;
    minor: number;
  };
}