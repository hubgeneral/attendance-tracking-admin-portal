import { Card, CardContent } from "@mui/material"

const Requests = () => {
  return (
    <Card className="shadow-sm shadow-gray-500 rounded-lg p-0  max-h-[290px] ">
                <CardContent >
                  <h3 className="text-lg font-semibold mb-2 text-[#758DA3]">
                    Requests
                  </h3>
                  {new Array(3).fill(0).map((_, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center mb-3 p-3 border-[#E8ECF0] rounded-lg bg-[#F7F7F7] "
                    >
                      <div>
                        <p className="text-sm">Addo Dankwa</p>
                        <p className="text-sm text-gray-500">
                          02/11/2025 09:00
                        </p>
                      </div>
                      <button className="bg-white text-[#004E2B] px-3 py-1 border-2 rounded-lg border-[#E8ECF0] text-xs">
                        Take Action
                      </button>
                    </div>
                  ))}
                </CardContent>
              </Card>
  )
}

export default Requests
