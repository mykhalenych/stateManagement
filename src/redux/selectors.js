export const selectUrl = (state) =>
    state.dataReducer.url
export const selectLoading = (state) =>
    state.dataReducer.isLoading
export const selectError = (state) => state.dataReducer.error