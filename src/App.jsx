import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import { House, File, Plus } from "lucide-react";
import RuangMeeting from "./layouts/RuangMeeting";
import { BrowserRouter, Routes, Route } from "react-router";
import DataRuangMeeting from "./components/DataRuangMeeting";
import FormPesanRuangan from "./components/FormPesanRuangan";
import { Toaster } from "@/components/ui/sonner"

import { AppProviders } from "./contexts";
function App() {
  const [count, setCount] = useState(0);

  return (
    <AppProviders>
      <div className="flex flex-col h-screen">
        <Navbar />

        {/* <h1 className="text-3xl font-bold underline ">Hello world!</h1> */}
        <div className="flex flex-grow">
          {/* <div className="menu">Hello</div> */}
          <div className=" px-3.5 pt-5 pb-6  shadow-[4px_0px_20px_0px_rgba(106,106,106,0.10)] inline-flex flex-col justify-start items-start gap-3">
            <div
              data-condition="Default"
              className="size- inline-flex justify-start items-start"
            >
              <div
                data-condition="True"
                data-hover="False"
                data-property-1="Leading Icon"
                data-style="Nude Button"
                className="size- flex justify-start items-start"
              >
                <div
                  data-label="False"
                  data-leading-icon="True"
                  data-trailing-icon="False"
                  className="h-10 p-3 rounded-lg flex justify-center items-center gap-2"
                >
                  <House width={18} />
                </div>
              </div>
            </div>
            <div
              data-condition="Active"
              className="size- inline-flex justify-start items-start gap-3.5"
            >
              <div
                data-condition="True"
                data-hover="False"
                data-property-1="Leading Icon"
                data-style="Fill Button"
                className="size-10 flex justify-start items-start"
              >
                <div
                  data-label="False"
                  data-leading-icon="True"
                  data-trailing-icon="False"
                  className="flex-1 self-stretch p-3 bg-slate-500 rounded-lg flex justify-center items-center gap-2"
                >
                  <File color="white" width={18} />
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="pl-7  pt-6 pb-9 inline-flex flex-col justify-start items-start gap-8">
              <BrowserRouter>
                <Routes>
                  <Route path="ruang-meeting" element={<RuangMeeting />}>
                    <Route index element={<DataRuangMeeting />} />
                    <Route
                      path="pesan-ruangan"
                      element={<FormPesanRuangan />}
                    />
                  </Route>
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
        <Toaster />
    </AppProviders>
  );
}

export default App;
