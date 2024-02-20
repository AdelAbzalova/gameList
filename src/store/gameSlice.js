import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGames = createAsyncThunk(
    'game/fetchGames', 
    async function(_, {rejectWithValue, getState}){
        const games=getState().games;

        const isCategory =games.genre ? `&category=${games.genre}` : "";
        const isPlatform = games.platform ? `${games.platform}` : "all";
        const isSort = games.sort ? `&sort-by=${games.sort}` : "";

  
            const response= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${isPlatform}${isCategory}${isSort}`, {
                    method: "GET",
                    headers: {
                      "X-RapidAPI-Key": "2db4ae875cmshc804e07e556fbf9p1241acjsn750ba9cc2e97",
                      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                    },
            });
            if(!response.ok){
               return rejectWithValue('server error')
            }
            const data= await response.json();
            return data;
  
    }
  )

export const fetchGame = createAsyncThunk(
    'game/fetchGame', 
    async function(id, {rejectWithValue}){
            const response= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
                    method: "GET",
                    headers: {

                        "X-RapidAPI-Key": "2db4ae875cmshc804e07e556fbf9p1241acjsn750ba9cc2e97",
                        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                    },
            });

            if(!response.ok){
               return rejectWithValue('server error')
            }
            const data= await response.json();
            return data;
  
    }
  )

const gameSlice = createSlice({
  name: "games",
  initialState: {
    list: [],
    platform:null, 
    sort:null,
    genre:null, 
    loading:false , 
    error:null,
    gameInfo:{},
  },
  reducers: {
    changeLoading(state, action){
        state.loading=action.payload;
    }, 
    changeGenre(state, action){
        state.genre=action.payload
    }, 
    changeSort(state, action){
        state.sort=action.payload
    },
    changePlatform(state, action){
        state.platform=action.payload
    }, 
    clearFilters(state){
        state.platform=null;
        state.genre=null;
        state.sort=null;
    },

  },
  extraReducers:(builder)=>{
    builder 
            .addCase(fetchGames.pending, (state)=>{
              state.loading=true;
              state.error=null;
            })
            .addCase(fetchGames.fulfilled, (state, action)=>{
              state.list=action.payload;
              state.loading=false;
            })
            .addCase(fetchGame.pending, (state)=>{
                state.loading=true;
                state.error=null;
              })
              .addCase(fetchGame.fulfilled, (state, action)=>{
                state.gameInfo=action.payload;
                state.loading=false;
              })
              .addMatcher(isError, (state )=>{
                state.error=true;
                state.loading= false;
              })
  }
});
function isError(action){

    return action.type.endsWith('rejected')
  }

export default gameSlice.reducer;
export const {
changePlatform, 
changeGenre, 
changeSort, 
changeLoading, 
clearFilters, 
} = gameSlice.actions;
