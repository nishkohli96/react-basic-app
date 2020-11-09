import { createContext } from 'react';
import { createContextualCan } from '@casl/react';

export const AbilityContext = createContext();
const Can = createContextualCan(AbilityContext.Consumer);

export default Can;
