import React from 'react'

export const Progress = () => {
  return (
    <div className="rounded-lg flex flex-col gap-4 bg-pink-100 p-5">
              <div>
                <div className="flex flex-row gap-6 mt-7 mb-7">
                  <div>
                    <p className="font-bold">Weekly Progress</p>
                    <div className="mt-4">
                      <p>Start from</p>
                      <p>Aug 3, 2024</p>
                    </div>
                  </div>
                  <div className="">
                    <p>Progress bar</p>
                  </div>
                </div>
              </div>
            </div>
  )
}
