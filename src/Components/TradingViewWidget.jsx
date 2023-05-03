import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget(props) {
  
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;
      
      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        

        
        if (document.getElementById('tradingview_9da52') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            
            symbol: `BINANCE:${props.symbol}USD`,
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_9da52"
          });
        }
      }
    },
    [props.symbol]
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_9da52' />
      <div className="tradingview-widget-copyright">
        <a href={`https://www.tradingview.com/symbols/${props.symbol}USD/?exchange=BINANCE`} rel="noreferrer" target="_blank"><span className="blue-text">{props.name} chart</span></a> by TradingView
      </div>
    </div>
  );
}