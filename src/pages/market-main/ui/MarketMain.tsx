import { MarketContactFooter } from "@/entities/market-contact-footer"
import { MarketInfo } from "@/entities/market-info"
import { ProductPreviewCard } from "@/entities/product-preview-card"
import { ShareButton } from "@/entities/share-button"
import { useEffect } from "react"
import { useTelegramWebApp } from '@/shared/hooks/useTelegramWebApp';
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@tanstack/react-query"
import { simpleLoginRequest } from "@/shared/api/simple-login"
import './MarketMain.scss'
import axios from "axios"

export const MarketMain = () => {
  const navigate = useNavigate()
  const tgWebApp = useTelegramWebApp();
  
  const BOT_TOKEN = '6368492553:AAHOZlfW440O9Hmlya-RcyD4p9PrRZeAxxA';
  const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/savePreparedInlineMessage`;

  const prepareMessage = async () => {

    const inlineQueryResult = {
      type: 'article',
      id: '2902940233',
      title: 'Sample Title',
      input_message_content: {
        message_text: 'This is the content of the message to be shared.',
      },
    };
    try {
      const inlineMessageContent = {
        user_id: tgWebApp.initDataUnsafe?.user?.id,
        result: inlineQueryResult,
        allow_user_chats: true,
        allow_group_chats: true
      };
  
      const response = await axios.post(API_URL, JSON.stringify(inlineMessageContent), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.data.ok) {
        const msg_id = response.data.result.id;
        return msg_id;
      } else {
        console.error('Error preparing message:', response.data.description);
      }
    } catch (error) {
      console.error('Axios error:', error);
    }
  };

  const sharePreparedMessage = async () => {
    const msg_id = await prepareMessage();
    console.log(msg_id);
  
    if (msg_id) {
      if (window.Telegram.WebApp.shareMessage) {
        window.Telegram.WebApp.shareMessage(msg_id, (success: boolean) => {
          if (success) {
            console.log('Message shared successfully.');
          } else {
            console.log('Message sharing failed.');
          }
        });
      } else {
        console.log('shareMessage method is not available.');
      }
    }
  };

  useEffect(() => {
    tgWebApp?.BackButton.hide()

    // @ts-ignore
    if (!tgWebApp?.initDataUnsafe?.start_param) {
      navigate(`/not-found`)
    } else {
      const regex = /m(\d+)/;
      const match = tgWebApp?.initDataUnsafe?.start_param.match(regex);
      if (match) {
        mutate({
          telegramUserRawData: "user=%7B%22id%22%3A7018007084%2C%22first_name%22%3A%22Raqamli%20Do%27kon%22%2C%22last_name%22%3A%22Aloqa%22%2C%22username%22%3A%22RaqamliDokonAloqa%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=2623882326889792317&chat_type=private&auth_date=1719016618&hash=a3244910d2e5d9f23ec156c1c9a59b162485e44335030639187fe2e2eb3f05de",
          marketId: match[1]
       })
      }
    }
  }, [])

  const { mutate, isPending, data } = useMutation({
    mutationKey: ['simple-login'],
    mutationFn: simpleLoginRequest,
    onSuccess: (data) => {
      console.log(data)
    }
  })

  // console.log(tgWebApp?.savePreparedInlineMessage());
  
  return (
    <div className="market-main">
      {isPending ? <p>Loading...</p> :
        <>
        <button onClick={sharePreparedMessage}>click</button>
        <MarketInfo data={data?.market} shareButton={<ShareButton />} />
        <div style={{padding: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
          {data?.products.map((product: any) => (
            <ProductPreviewCard key={product.id} product={product} />
          ))}
        </div>
        <div style={{width: '100%', height: 180}}></div>
          <MarketContactFooter 
            contactTelegramLink={data?.market?.contactTelegramLink} 
            ownerTelegramChannelLink={data?.market?.ownerTelegramChannelLink} 
          />
        </>
      }
    </div>
  )
}
