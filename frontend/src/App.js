import React, { useState } from "react";
import StarsRating from "stars-rating";
import axios from 'axios';

function App() {
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [rate, setRate] = useState("");
  const [mail, setMail] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div className="sm:mb- mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div className="sm:mt-0 p-2 ">
        <div className="md:grid md:grid-cols-3 md:gap-6 p-2">
          <div className="col-span-6">
            <input
              type="email"
              name="mail"
              placeholder="Email address"
              id="mail"
              value={mail}
              className="p-2 text-black mt-1 block w-full border-2 rounded-xl border-neutral-500	 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="col-span-6">
            <textarea
              className="mt-1 p-2 block w-full border-2 rounded-xl border-neutral-500 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              placeholder="Mesajınız varsa yazabilirsiniz"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="col-span-6">
            <StarsRating
              count={5}
              size={48}
              color2={"#ffd700"}
              value={rate}
              className="flex block-col justify-center"
              onChange={(e) => {
                setRate(e)
              }}
            />
          </div>
          <div className="col-span-6">
          <div className="flex block-col justify-center">
            <div className="px-4 py-3 flex items-center justify-center text-right sm:px-6 rounded-xl">
              <button
                name="giris"
                className={
                  submitDisabled === true
                    ? 'hidden '
                    : 'inline-flex ' +
                    "justify-center relative -top-1 -left-1 w-36 rounded-xl bg-gradient-to-r from-[#000539] via-[#0091F5]/50 to-[#C57CDE]/70 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-10 before:h-full before:w-full before:border-[#005FAB]/10 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 "
                }
                disabled={submitDisabled}
                onClick={() => {
                  setSubmitDisabled(true)
                  const data = {
                    rate: rate,
                    mail: mail,
                    comment: comment
                  }

                  // console.log(data, 'local')

                  axios.post('http://localhost:5000/api/comment', data).
                  then(res=>{
                      console.log('res')
                      console.log(res.data)
                  }).
                  catch(e=>{
                    console.log('err')
                    console.log(e.response.data)
                  })
                }}
              >
                Gönder
              </button>
              <label
                className={submitDisabled === false ? 'hidden ' : 'inline-flex ' + "justify-center relative -top-1 -left-1 w-36 rounded-xl bg-gradient-to-r from-[#000539] via-[#0091F5]/50 to-[#C57CDE]/70 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-10 before:h-full before:w-full before:border-[#005FAB]/10 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 "}
                disabled={!submitDisabled}
              >
                Gönderiliyor
              </label>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
