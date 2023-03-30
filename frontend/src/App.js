import React, { useState } from "react";
import StarsRating from "stars-rating";
import axios from 'axios';

function App() {
  const [submitDisabled, setSubmitDisabled] = useState(false)
  const [rate, setRate] = useState("");
  const [mail, setMail] = useState("");
  const [comment, setComment] = useState("");

  return (
    <>
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
                        then(res => {
                          console.log('res')
                          console.log(res.data)
                        }).
                        catch(e => {
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

      {submitDisabled && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-[#21A9E1] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.6 74.87" stroke="currentColor" fill="#21A9E1">
                      <path d="M67.6 0H44.06s-4.78.41-7.76 4.86c-2.98 4.45-13.88 20.88-13.88 20.88l-5.8-8.85H.14S3.4 27.84 3.81 29.41c.41 1.58 1.23 4.51 1.4 5.47.09.44 1.13 4.91 1.23 7.88 0 .76.28 6.55-.4 10.4-.28 1.43-.45 4.45-2.85 11.43C1.43 70.35 0 74.84 0 74.84h12.05s4.92-.51 7.62-4.54c.79-1.2 10.71-15.75 10.71-15.75l7.31 11.06h-9.23l-6.3 9.27h32.41L35.94 46.43 67.6 0ZM12.85 64.02c1.11-3.09 1.9-8.06 2.09-9.44 2.12-14.2-2.33-27.11-2.33-27.11l9.68 14.73S43.19 11 43.78 10.11c.59-.88 1.2-.8 1.2-.8h5.29S13.31 63.55 12.85 64.02" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Geri bildiriminiz için teşekkür ederiz</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setSubmitDisabled(false)}>
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )
      }
    </>
  );
}
export default App;
