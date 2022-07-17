export const selectUrl = (state) =>
    state.dataSlice.url
export const selectLoading = (state) =>
    state.dataSlice.isLoading
export const selectError = (state) => state.dataSlice.error