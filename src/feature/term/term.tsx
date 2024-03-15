import { css, keyframes } from "@emotion/react";

export const Term = () => {
  return (
    <div css={containerStyle}>
      <h1 css={sectionStyle}>利用規約</h1>
      <p css={textStyle}>
        この利用規約（以下、「本規約」といいます。）は、PAFE開発者（以下、「開発者」といいます。）がスマートフォン向けアプリケーションPAFE上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
      </p>
      <h3 css={sectionStyle}>第1条（適用）</h3>
      <p css={textStyle}>
        本規約は、ユーザーと開発者との間の本サービスの利用に関わる一切の関係に適用されるものとします。
        開発者は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下、「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
        本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めなき限り、個別規定の規定が優先されるものとします。
      </p>
      <h3 css={sectionStyle}>第2条（利用登録）</h3>
      <p css={textStyle}>
        本サービスにおいては、登録希望者が本規約に同意の上、開発者の定める方法によって利用登録を申請し、開発者がこの承認を登録希望者に通知することによって、利用登録が完了するものとします。
        開発者は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあり、その理由については一切の開示義務を負わないものとします。
        <br></br>
        <br></br>
        利用登録の申請に際して虚偽の事項を届け出た場合<br></br>
        本規約に違反したことがある者からの申請である場合<br></br>
        その他、開発者が利用登録を相当でないと判断した場合
      </p>
      <h3 css={sectionStyle}>第3条（メールアドレスおよびパスワードの管理）</h3>
      <p css={textStyle}>
        ユーザーは、自己の責任において、本サービスで使用するメールアドレスおよびパスワードを適切に管理するものとします。
        ユーザーは、いかなる場合にも、本サイトで使用するアカウントを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。開発者は、メールアドレスとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのメールアドレスを登録しているユーザー自身による利用とみなします。
        メールアドレス及びパスワードが第三者によって使用されたことによって生じた損害は、開発者に故意又は重大な過失がある場合を除き、開発者は一切の責任を負わないものとします。
      </p>
      <h3 css={sectionStyle}>第4条（広告）</h3>
      <p css={textStyle}>
        本サービスは、サーバーの維持•管理のため広告による収益を行っています。無料ユーザーに対しては、本サービスの使用にあたり、広告を表示します。広告ブロッカーの使用によって広告の視聴を回避する等の、収益化を阻害するいかなる行為を禁止します。
      </p>
      <h3 css={sectionStyle}>第5条（禁止事項）</h3>
      <p css={textStyle}>
        ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
        <br></br>
        <br></br>
        法令または公序良俗に違反する行為 犯罪行為に関連する行為
        <br></br>
        開発者、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
        <br></br>
        開発者のサービスの運営を妨害するおそれのある行為
        <br></br>
        他のユーザーに関する個人情報等を収集または蓄積する行為
        <br></br>
        不正アクセスをし、またはこれを試みる行為 他のユーザーに成りすます行為
        <br></br>
        開発者のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
        <br></br>
        開発者、本サービスの他のユーザーまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為
        <br></br>
        <br></br>
        以下の表現を含み、または含むと開発者が判断する内容を本サービス上に投稿し、または送信する行為
        <br></br>
        <br></br>
        過度に暴力的な表現 露骨な性的表現
        <br></br>
        人種、国籍、信条、性別、社会的身分、門地等による差別につながる表現
        <br></br>
        自殺、自傷行為、薬物乱用を誘引または助長する表現
        <br></br>
        その他反社会的な内容を含み他人に不快感を与える表現
        <br></br>
        以下を目的とし、または目的とすると開発者が判断する行為
        <br></br>
        営業、宣伝、広告、勧誘、その他営利を目的とする行為（開発者の認めたものを除きます。）
        <br></br>
        性行為やわいせつな行為を目的とする行為
        <br></br>
        面識のない異性との出会いや交際を目的とする行為
        <br></br>
        他のユーザーに対する嫌がらせや誹謗中傷を目的とする行為
        <br></br>
        開発者、本サービスの他のユーザー、または第三者に不利益、損害または不快感を与えることを目的とする行為
        <br></br>
        その他本サービスが予定している利用目的と異なる目的で本サービスを利用する行為
        <br></br>
        宗教活動または宗教団体への勧誘行為 その他、開発者が不適切と判断する行為
      </p>
      <h3 css={sectionStyle}> 第6条（本サービスの提供の停止等）</h3>
      <p css={textStyle}>
        開発者は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
        <br></br>
        <br></br>
        本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
        <br></br>
        地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
        <br></br>
        コンピュータまたは通信回線等が事故により停止した場合
        <br></br>
        その他、開発者が本サービスの提供が困難と判断した場合
        <br></br>
        <br></br>
        開発者は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
      </p>
      <h3 css={sectionStyle}>第7条（著作権）</h3>
      <p css={textStyle}>
        ユーザーは、自ら著作権等の必要な知的財産権を有するか、または必要な権利者の許諾を得た文章のみ、本サービスを利用し、投稿ないしアップロードすることができるものとします。
        ユーザーが本サービスを利用して投稿ないしアップロードした文章の著作権については、当該ユーザーその他既存の権利者に留保されるものとします。ただし、開発者は、本サービスを利用して投稿ないしアップロードされた文章について、本サービスの改良、品質の向上、または不備の是正等ならびに本サービスの周知宣伝等に必要な範囲で利用できるものとし、ユーザーは、この利用に関して、著作者人格権を行使しないものとします。
        前項本文の定めるものを除き、本サービスおよび本サービスに関連する一切の情報についての著作権およびその他の知的財産権はすべて開発者または開発者にその利用を許諾した権利者に帰属し、ユーザーは無断で複製、譲渡、貸与、翻訳、改変、転載、公衆送信（送信可能化を含みます。）、伝送、配布、出版、営業使用等をしてはならないものとします。
      </p>
      <h3 css={sectionStyle}>第8条（利用制限および登録抹消）</h3>
      <p css={textStyle}>
        開発者は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、投稿データを削除し、ユーザーに対して本サービスの全部もしくは一部の利用を制限しまたはユーザーとしての登録を抹消することができるものとします。
        <br></br>
        <br></br>
        本規約のいずれかの条項に違反した場合
        <br></br>
        登録事項に虚偽の事実があることが判明した場合
        <br></br>
        決済手段として当該ユーザーが届け出たクレジットカードが利用停止となった場合
        <br></br>
        料金等の支払債務の不履行があった場合
        <br></br>
        開発者からの連絡に対し、一定期間返答がない場合
        <br></br>
        本サービスについて、最終の利用から一定期間利用がない場合
        <br></br>
        その他、開発者が本サービスの利用を適当でないと判断した場合
        <br></br>
        <br></br>
        前項各号のいずれかに該当した場合、ユーザーは、当然に開発者に対する一切の債務について期限の利益を失い、その時点において負担する一切の債務を直ちに一括して弁済しなければなりません。
        開発者は、本条に基づき開発者が行った行為によりユーザーに生じた損害について、一切の責任を負いません。
      </p>
      <h3 css={sectionStyle}>第9条（退会）</h3>
      <p css={textStyle}>
        ユーザーは、開発者の定める退会手続により、本サービスから退会できるものとします。
      </p>
      <h3 css={sectionStyle}>第10条（保証の否認および免責事項）</h3>
      <p css={textStyle}>
        開発者は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
        開発者は、本サービスに起因してユーザーに生じたあらゆる損害について、開発者の故意又は重過失による場合を除き、一切の責任を負いません。ただし、本サービスに関する開発者とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合、この免責規定は適用されません。
        前項ただし書に定める場合であっても、開発者は、開発者の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（開発者またはユーザーが損害発生につき予見し、または予見し得た場合を含みます。）について一切の責任を負いません。また、開発者の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は、ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
        開発者は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
      </p>
      <h3 css={sectionStyle}>第11条（サービス内容の変更等）</h3>
      <p css={textStyle}>
        開発者は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。
      </p>
      <h3 css={sectionStyle}>第12条（利用規約の変更）</h3>
      <p css={textStyle}>
        開発者は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができるものとします。
        <br></br>
        <br></br>
        本規約の変更がユーザーの一般の利益に適合するとき。
        <br></br>
        本規約の変更が本サービス利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき。
        <br></br>
        開発者はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。
      </p>
      <h3 css={sectionStyle}>第13条（個人情報の取扱い）</h3>
      <p css={textStyle}>
        開発者は、本サービスの利用によって取得する個人情報については、開発者「プライバシーポリシー」に従い適切に取り扱うものとします。
      </p>
      <h3 css={sectionStyle}>第14条（通知または連絡）</h3>
      <p css={textStyle}>
        ユーザーと開発者との間の通知または連絡は、開発者の定める方法によって行うものとします。開発者は、ユーザーから、開発者が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。
      </p>
      <h3 css={sectionStyle}>第15条（権利義務の譲渡の禁止）</h3>
      <p css={textStyle}>
        ユーザーは、開発者の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
      </p>
      <h3 css={sectionStyle}>第16条（準拠法・裁判管轄）</h3>
      <p css={textStyle}>
        本規約の解釈にあたっては、日本法を準拠法とします。
        本サービスに関して紛争が生じた場合には、開発者の本店所在地を管轄する裁判所を専属的合意管轄とします。
      </p>
      <p css={textStyle}>以上</p>
    </div>
  );
};

const containerAnimation = keyframes`
0%{
    margin-top: 2%;
    opacity: 0;
}
100% {
    margin-top: 3%;
    opacity: 1;
}
`;
const containerStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "3%",
  animation: `${containerAnimation} 1s`,
});
const textStyle = css({ color: "#EEEEEE", width: "60%", lineHeight: "2" });
const sectionStyle = css({ color: "#EEEEEE" });
