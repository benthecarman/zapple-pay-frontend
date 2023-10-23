export function AutoFaq() {

    function handleMakePage() {
        let npub = window.prompt("What's your npub?");
    
        if (!npub) return;
    
        window.location.href = `/autozap/${npub}`;
      }
      
    return (
        <aside class="p-4 bg-[hsl(0,0%,10%)] rounded w-full max-w-[20rem] flex flex-col gap-4">
        <h2 class="text-xl font-semibold text-left">What is this?</h2>
        <p>
          <span class="text-primary font-semibold">Zaps</span> are a
          convenient way to tip your friends on Nostr.
        </p>
        <p>
          <span class="text-primary font-semibold">
            NWC (Nostr Wallet Connect)
          </span>{" "}
          is a way to connect your wallet to your Nostr client.
        </p>
        <p>
          <span class="text-primary font-semibold">AutoZaps</span> uses NWC to
          ping your wallet with a Zap request on a regular interval. Streaming
          sats for everyone!
        </p>
        <p>
          <span class="text-primary font-semibold">
            How do I stop a subscription?
          </span>{" "}
          Just delete the NWC item from your wallet.{" "}
        </p>
        <p>
          <span class="text-primary font-semibold">
            How do I make one of these pages?
          </span>{" "}
          <button onClick={handleMakePage} class="underline">
            I'm glad you asked
          </button>
        </p>
      </aside>
    )
}