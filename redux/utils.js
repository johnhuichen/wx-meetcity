const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const camelCaseToSnakeCase = string =>
  string.replace(/([A-Z])/g, letter => `_${letter.toLowerCase()}`)

const createReducers = (
  dataArray,
  additionalStates = {},
  additionalReducers = state => state
) => {
  const initialState = {
    ...dataArray.reduce((acc, dataName) => {
      return {
        ...acc,
        [dataName]: null,
        [`${dataName}Loading`]: true,
        [`${dataName}Error`]: false
      }
    }, {}),
    ...additionalStates
  }
  const actionNames = dataArray.reduce((acc, dataName) => {
    const dataActionName = camelCaseToSnakeCase(dataName).toUpperCase()
    return { ...acc, [`SET_${dataActionName}`]: dataName }
  }, {})
  const actionLoadingNames = dataArray.reduce((acc, dataName) => {
    const dataActionName = camelCaseToSnakeCase(dataName).toUpperCase()
    return { ...acc, [`SET_${dataActionName}_LOADING`]: dataName }
  }, {})
  const actionErrorNames = dataArray.reduce((acc, dataName) => {
    const dataActionName = camelCaseToSnakeCase(dataName).toUpperCase()
    return { ...acc, [`SET_${dataActionName}_ERROR`]: dataName }
  }, {})

  return (state = initialState, action) => {
    const { type: actionType } = action

    if (actionNames[actionType]) {
      const dataName = actionNames[actionType]
      return {
        ...state,
        [dataName]: action[dataName],
        [`${dataName}Loading`]: false,
        [`${dataName}Error`]: false
      }
    }

    if (actionLoadingNames[actionType]) {
      const dataName = actionLoadingNames[actionType]
      return {
        ...state,
        [`${dataName}Loading`]: true,
        [`${dataName}Error`]: false
      }
    }

    if (actionErrorNames[actionType]) {
      const dataName = actionErrorNames[actionType]
      return {
        ...state,
        [`${dataName}Loading`]: false,
        [`${dataName}Error`]: true
      }
    }

    return additionalReducers(state, action)
  }
}

const createActionFunctions = dataArray =>
  dataArray.reduce((acc, dataName) => {
    const dataActionName = camelCaseToSnakeCase(dataName).toUpperCase()
    const setActionFuncName = `set${capitalize(dataName)}`
    const setLoadingActionFuncName = `set${capitalize(dataName)}Loading`
    const setErrorActionFuncName = `set${capitalize(dataName)}Error`
    const setActionFunc = data => ({
      type: `SET_${dataActionName}`,
      [dataName]: data
    })
    const setLoadingActionFunc = () => ({
      type: `SET_${dataActionName}_LOADING`
    })
    const setErrorActionFunc = () => ({ type: `SET_${dataActionName}_ERROR` })

    return {
      ...acc,
      [setActionFuncName]: setActionFunc,
      [setLoadingActionFuncName]: setLoadingActionFunc,
      [setErrorActionFuncName]: setErrorActionFunc
    }
  }, {})

export { createReducers, createActionFunctions }
