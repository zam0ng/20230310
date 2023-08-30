import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import axios from "axios";
// createSlice 메서드를 사용해서 create함수를 가지고있는 객체를 만듬
export const countSlice = createSlice({
    // Slice 구분 이름
    name : "count3",
    // 초기값
    initialState : {num : 0 },
    reducers : {

        add : (state) =>{
            console.log(state.num);
            // 이전 상태가 매개변수로 들어온다.
            state.num += 1;
        },
        remove : (state) =>{
            state.num -= 1;
        }
    }
})
// api 따로 없으니까 날씨api 가져오자.
export const weather = createAsyncThunk("/weather",async(name)=>{
    // axios
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=ebac80908ace01c984f9989655759128`)
    const {data} = resp;
    return data;
})

export const countSlice2 = createSlice({
    // Slice 구분 이름
    name : "count2",
    // 초기값
    initialState : {num : 0, value : "나 상태 "},
    // 동기적인 작업을 처리하고 
    reducers : {

        add2 : (state) =>{
            // 이전 상태가 매개변수로 들어온다.
            state.num += 1;
        },
        remove2 : (state) =>{
            state.num -= 1;
        }
    },
    // 비동기처리는 여기에 작성해라 라고 만들어짐
    extraReducers : (builder)=>{

        console.log(builder);
        // extraReducers의 builder 매개변수로 받고 케이스를 추가하는데
        // 상태의 케이스 추가 로딩중, 완료, 실패
        // 상태 케이스를 등록 해준다.
        // builder.addCase() 케이스 추가 
    
        // 로딩중 케이스
        builder.addCase(weather.pending, (state,action)=>{
            state.value = "로딩중임";
        })

        // 완료되었을 때 케이스
        builder.addCase(weather.fulfilled, (state,action)=>{
            console.log(action);
            state.value = "완료";
            state.num +=1;
        })
        
        // 실패했을 때 케이스
        builder.addCase(weather.rejected, (state,action)=>{
            state.value = "실패";
        })
    }
})


// action 함수를 내보내서 dispatch로 전달해서 액션 발생시킬거임.
export const {add, remove} = countSlice.actions;
export const {add2, remove2} = countSlice2.actions;