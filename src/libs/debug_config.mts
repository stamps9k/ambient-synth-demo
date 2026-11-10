import debug from "debug";

/*---------------------------------------------------------------------------*/
const logger = {
  // Logging for calls made to the ambient-synth library.
  super_super_verbose_synth: debug("js:synth:SUPER_SUPER_VERBOSE"),
  super_verbose_synth: debug("js:synth:SUPER_VERBOSE"),
  verbose_synth: debug("js:synth:VERBOSE"),
  info_synth: debug("js:synth:INFO"),
  warn_synth: debug("js:synth:WARN"),
  error_synth: debug("js:synth:ERROR"),

  // Logging for anything managed entirely by this webapp
  super_super_verbose_webapp: debug("js:webapp:SUPER_SUPER_VERBOSE"),
  super_verbose_webapp: debug("js:webapp:SUPER_VERBOSE"),
  verbose_webapp: debug("js:webapp:VERBOSE"),
  info_webapp: debug("js:webapp:INFO"),
  warn_webapp: debug("js:webapp:WARN"),
  error_webapp: debug("js:webapp:ERROR"),
};

logger["super_super_verbose_synth"](
  "Super Super Verbose debugging enabled for the ambient-synth library.",
);
logger["super_verbose_synth"](
  "Super Verbose debugging enabled for the ambient-synth library.",
);
logger["verbose_synth"](
  "Verbose debugging enabled for the ambient-synth library.",
);
logger["info_synth"]("Info debugging enabled for the ambient-synth library.");
logger["warn_synth"]("Warn debugging enabled  for the ambient-synth library.");
logger["error_synth"]("Error debugging enabled for the ambient-synth library.");

logger["super_super_verbose_webapp"](
  "Super Super Verbose debugging enabled for the webapp.",
);
logger["super_verbose_webapp"](
  "Super Verbose debugging enabled for the webapp.",
);
logger["verbose_webapp"]("Verbose debugging enabled for the webapp.");
logger["info_webapp"]("Info debugging enabled for the webapp.");
logger["warn_webapp"]("Warn debugging enabled  for the webapp.");
logger["error_webapp"]("Error debugging enabled for the webapp.");
/*---------------------------------------------------------------------------*/

// Export from this module for access in rest of project
export { logger };
