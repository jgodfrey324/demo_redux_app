import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch monsters from the D&D 5e API
export const fetchMonsters = createAsyncThunk(
  'monsters/fetchMonsters',
  async () => {
    const response = await fetch('https://www.dnd5eapi.co/api/monsters');
    const data = await response.json();
    return data.results; // Return the list of monsters
  }
);

// Fetch a single monster's details
export const fetchMonsterByIndex = createAsyncThunk(
  'monsters/fetchMonsterByIndex',
  async (index) => {
    const response = await fetch(`https://www.dnd5eapi.co/api/monsters/${index}`);
    const data = await response.json();
    return data; // Return the monster's details
  }
);

const monstersSlice = createSlice({
  name: 'monsters',
  initialState: {
    entries: {},
    indexedEntries: {},
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch monsters
      .addCase(fetchMonsters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMonsters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entries = action.payload.reduce((acc, monster) => {
            acc[monster.index] = monster;
            return acc;
        }, {});
      })
      .addCase(fetchMonsters.rejected, (state) => {
        state.status = 'failed';
      })
      // Fetch monster by Index
      .addCase(fetchMonsterByIndex.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMonsterByIndex.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedMonster = action.payload;
        const payloadIndex = action.payload.index
        state.indexedEntries[payloadIndex] = action.payload
      })
      .addCase(fetchMonsterByIndex.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default monstersSlice.reducer;
