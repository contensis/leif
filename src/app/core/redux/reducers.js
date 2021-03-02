// Import feature reducers to be included with application startup
import UIReducers from './custom/ui/reducers';

const featureReducers = {
  ui: UIReducers,
};

export default { ...featureReducers };
