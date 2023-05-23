import CoinsOverview from "./CoinsOverview"

const BlokAssetOverview = () => {
  return (
    <div className="grid gap-5 mb-5">
        <div className="font-cabinet text-blok-grey text-16 font-medium">
            <p className="leading-5">Total assets value in $</p>
            <h2 className="text-40 font-bold text-blok-dark">$12,300.58</h2>
            <p className="leading-5">12,300 BTC</p>
        </div>

        <div className="">
            <CoinsOverview />
        </div>
    </div>
  )
}

export default BlokAssetOverview