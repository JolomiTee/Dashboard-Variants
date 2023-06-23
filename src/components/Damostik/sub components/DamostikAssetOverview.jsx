import React from 'react'
import InvisibleLight from '../../../assets/Damostik/icons/EyeSlashLight.svg'
import InvisibleDark from '../../../assets/Damostik/icons/EyeSlashDark.svg'
import DepositIconDark from '../../../assets/Damostik/icons/depositDark.svg'
import WithdrawIconLight from '../../../assets/Damostik/icons/WiithdrawalLight.svg'
import DepositIconLight from '../../../assets/Damostik/icons/DepositLight.svg'
import WithdrawalIconDark from '../../../assets/Damostik/icons/WithdrawalDark.svg'


const DamostikAssetOverview = () => {
    return (
        <div id='assetOverview' className="grid md:grid-cols-2 gap-5">

            <div id="walletBalance" className="bg-damostik-dark-green p-5 xl:p-[32px] text-white font-bold rounded-12 flex flex-col xl:flex-row gap-3 xl:gap-7 justify-between w-full">
                <div className='flex flex-col xl:justify-between'>
                    <span className="flex gap-5">
                        <p className="text-15">Wallet Balance</p>
                        <img src={InvisibleLight} alt="Hide balance" />
                    </span>
                    <h1 className="text-[30px] xl:text-[36px]">#93,456.78</h1>
                </div>
                <div className="flex md:flex-col gap-3  xl:w-[185px]">
                    <button className="rounded-12 flex justify-center items-center gap-3 h-[44px] min-w-[100px] w-full text-14 text-damostik-dark-green bg-damostik-light-green">
                        <img src={DepositIconDark} className='w-5 h-5' alt="Deposit" />
                        Deposit
                    </button>
                    <button className="rounded-12 flex justify-center items-center gap-3 h-[44px] min-w-[100px] w-full text-14 text-damostik-light-green bg-transparent border border-damostik-light-green">
                        <img src={WithdrawIconLight} className='w-5 h-5' alt="Withdraw" />
                        Withdraw
                    </button>
                </div>
            </div>


            <div id="walletBalance" className="bg-damostik-light-green p-5 xl:p-[32px] text-black font-bold rounded-12 flex flex-col xl:flex-row gap-3 xl:gap-7 justify-between w-full">
                <div className='flex flex-col xl:justify-between'>
                    <span className="flex gap-5 w-full">
                        <p className="text-15">Reserved Balance</p>
                        <img src={InvisibleDark} alt="Hide balance" />
                    </span>
                    <h1 className="text-[30px] xl:text-[36px]">#72,456.78</h1>
                </div>
                <div className="flex md:flex-col gap-3 xl:w-[185px]">
                    <button className="rounded-12 flex justify-center items-center gap-3 h-[44px] min-w-[100px] w-full text-14 text-damostik-light-green bg-damostik-dark-green">
                        <img src={DepositIconLight} className='w-5 h-5' alt="Deposit" />
                        Deposit
                    </button>
                    <button className="rounded-12 flex justify-center items-center gap-3 h-[44px] min-w-[100px] w-full text-14 text-damostik-dark-green bg-transparent border border-damostik-dark-green">
                        <img src={WithdrawalIconDark} className='w-5 h-5' alt="Withdraw" />
                        Withdraw
                    </button>
                </div>
            </div>


        </div>
    )
}

export default DamostikAssetOverview