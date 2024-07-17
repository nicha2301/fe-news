import { useState } from "react"
import { Helmet } from "react-helmet"
import ExchangeRates from "~/components/TienIch/ExchangeRate"
import GoldPrices from "~/components/TienIch/GoldPrices"
import LotteryResults from "~/components/TienIch/LotteryResult"
import StockInfo from "~/components/TienIch/StockInfo"
interface NavigationProps {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
    activeTab: string
 }
const Navigation = ({ setActiveTab, activeTab }:NavigationProps) => {
    return (
       <nav className='bg-primary-foreground p-4'>
          <ul className='flex gap-4 flex-wrap'>
             <li>
                <button
                   className={`${activeTab === 'exchange-rate' && 'text-primaryColor'}`}
                   onClick={() => setActiveTab('exchange-rate')}
                >
                   Tỷ giá ngoại tệ
                </button>
             </li>
             <li>
                <button
                   className={`${activeTab === 'gold-price' && 'text-primaryColor'}`}
                   onClick={() => setActiveTab('gold-price')}
                >
                   Giá vàng
                </button>
             </li>
             <li>
                <button
                   className={`${activeTab === 'lottery-results' && 'text-primaryColor'}`}
                   onClick={() => setActiveTab('lottery-results')}
                >
                   Kết quả xổ số
                </button>
             </li>
             <li>
                <button
                   className={`${activeTab === 'stock-market' && 'text-primaryColor'}`}
                   onClick={() => setActiveTab('stock-market')}
                >
                   Chứng khoán
                </button>
             </li>
          </ul>
       </nav>
    )
 }
 
 export default function TienIch() {
    const [activeTab, setActiveTab] = useState<string>('exchange-rate')
 
    return (
       <>
          <Helmet>
             <title>Tiện ích | Giáo dục thời đại</title>
          </Helmet>
          <h1 className='text-3xl font-bold pb-2 mb-6 border-b-2 border-b-primaryColor flex items-center justify-between'>
             Tiện Ích
          </h1>
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === 'exchange-rate' && <ExchangeRates />}
          {activeTab === 'gold-price' && <GoldPrices />}
          {activeTab === 'lottery-results' && <LotteryResults />}
          {activeTab === 'stock-market' && <StockInfo />}
        
       </>
    )
 }