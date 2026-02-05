"use client"
import { Google } from "@lobehub/icons"
import React from "react"
import { useState } from "react"
import { EyeOff } from "lucide-react"
import { Eye } from "lucide-react"
export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="min-w-screen grid grid-cols-2">
      <div className="h-screen bg-white">
        <div>
          <div className="flex items-center mt-50">
            <img src={"/logo.svg"} />
            <div className="grid">
              <label className="font-noto text-5xl text-black font-bold">
                STORA
              </label>
              <label className="font-noto text-3xl text-black font-extralight">
                Best Stock Management
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#4d4eb7] shadow-[inset_0px_35px_229.7px_38px_rgba(0,0,0,0.1)] h-screen ">
        <div
          className="relative bg-[#ffffff14] m-5 mr-15 ml-15 h-150 rounded-3xl border border-white/20 backdrop-blur-[50px] shadow-xl/100 
        inset-shadow-sm inset-shadow-white/10 shadow-[#211952] "
        >
          <div className="m-15 grid gap-5">
            <div className="text-4xl font-nokora font-bold flex items-center justify-center">
              Login
            </div>
            <div className="grid gap-3">
              <label>Email</label>
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="example@gmail.com"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 "
              />
            </div>
            <div className="grid">
              <div className="relative grid gap-3">
                <label>Password</label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  autoComplete="current-password"
                  placeholder="Password"
                  className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/30 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 "
                ></input>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 z-10 pt-11 text-white/60 hover:text-white cursor-pointer"
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </button>
              </div>
            </div>
            <div>
              <button className="hover:text-[#8a9aff] cursor-pointer">
                Forgot Password?
              </button>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
              <button
                type="submit"
                value="Submit"
                className="bg-[#4445a1] btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl w-35 h-10 rounded-lg cursor-pointer transition-transform duration-300 ease-out
  hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:scale-95 active:shadow-md"
              >
                Sign in
              </button>
              <div>
                <label>or continue with</label>
              </div>
              <button
                className="bg-white w-55 h-10 rounded-2xl relative flex items-center text-black pl-5 cursor-pointer transition-transform duration-300 ease-out
  hover:-translate-y-1 active:translate-y-0 active:scale-95 active:shadow-md"
              >
                {" "}
                continue with Google
                <div className="absolute z-10 right-3">
                  <Google.Avatar size={30} />
                </div>
              </button>
            </div>
            <div className="flex justify-center items-center">
              <label>
                Don’t have an account yet?
                <button className="font-bold cursor-pointer hover:text-[#4445a1]/80 duration-200 active:scale-95 transition-transform">
                  Register now
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
