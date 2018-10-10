/* common constants*/
const SETTINGS_KEY_OAUTH = "OAUTH";
const SETTINGS_KEY_UNIT = "UNIT";
const SETTINGS_KEY_OTC_OFFSET = "OTCOFFSET";

const REJECT = "Error";
const RESOLVE = "Success";

const MESSAGE_REQUEST_WEIGHT_LOG_API = "REQUEST_FROM_WEB"
const MESSAGE_RETRIEVE_SUCCES_API = "SUCCESS_RECEIVED_FROM_WEB";
const MESSAGE_RETRIEVE_FAILURE_API = "FAILURE_RECEIVED_FROM_WEB";
const MESSAGE_POST_WEIGHTS_API = "POST_TO_WEB";
const MESSAGE_POST_SUCCESS_API = "SUCCESS_POST_TO_WEB";
const MESSAGE_POST_FAILURE_API = "FAILURE_POST_TO_WEB";
const MESSAGE_UNIT_SETTING_CHANGED = SETTINGS_KEY_UNIT;

const ERROR_API_TOKEN_GENERAL = "Could not refresh token";
const ERROR_API_TOKEN_OLD_REFRESH_TOKEN = "Refresh TOKEN obsolete. Please reconnect to FitBit versus the smartphone app.";
const ERROR_API_FETCH_WEIGHT_LOG = "Could not fetch the weight logs from the FitBit web API.";
const ERROR_API_POST_WEIGHT_LOG = "Could not post the weight log to the FitBit web API.";
const ERROR_API_FETCH_PROFILE = "Could not retrieve user profile data.";

export {
    MESSAGE_UNIT_SETTING_CHANGED,
    MESSAGE_POST_SUCCESS_API,
    MESSAGE_POST_FAILURE_API,
    MESSAGE_POST_WEIGHTS_API,
    MESSAGE_RETRIEVE_SUCCES_API,
    MESSAGE_RETRIEVE_FAILURE_API,
    MESSAGE_REQUEST_WEIGHT_LOG_API,
    SETTINGS_KEY_OAUTH,
    SETTINGS_KEY_UNIT,
    SETTINGS_KEY_OTC_OFFSET,
    REJECT,
    RESOLVE,
    ERROR_API_TOKEN_GENERAL,
    ERROR_API_TOKEN_OLD_REFRESH_TOKEN,
    ERROR_API_FETCH_WEIGHT_LOG,
    ERROR_API_POST_WEIGHT_LOG,
    ERROR_API_FETCH_PROFILE
};