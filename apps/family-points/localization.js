const translations = {
  zh: {
    common: {
      brand: "檐下见长",
      brandMark: "檐",
      homeLabel: "App Pages 首页",
      back: "← 返回檐下见长",
      languageLabel: "选择语言",
      copyright: "© 2026 檐下见长"
    },
    home: {
      title: "檐下见长 · 产品文档与支持",
      description: "檐下见长的使用说明、隐私政策、用户协议与支持信息。",
      eyebrow: "一起成长",
      heading: "小小积分，<br>看得见的成长。",
      lead: "用家庭任务、积分奖励、长期目标和成长相册，把每天的进步记录下来。",
      viewDocuments: "查看文档",
      documentsEyebrow: "文档",
      documentsTitle: "文档与支持",
      guideTitle: "使用说明",
      guideText: "快速入门、主要功能与常见操作",
      privacyTitle: "隐私政策",
      privacyText: "了解数据的保存、iCloud 备份与权限使用",
      termsTitle: "用户协议",
      termsText: "了解使用规则、服务边界与责任说明",
      supportTitle: "获取支持",
      supportText: "常见问题、故障排查与联系方式"
    },
    guide: {
      title: "檐下见长使用说明",
      description: "檐下见长使用说明。",
      eyebrow: "使用说明",
      heading: "檐下见长使用说明",
      meta: "适用版本：1.0 · 更新日期：2026 年 8 月 2 日",
      intro: "《檐下见长》用任务、积分、奖励和成长记录，帮助家人把每天的进步变得具体可见。",
      startTitle: "1. 开始使用",
      startText: "首次打开 App 时，输入家长和孩子的昵称，然后选择几个常用任务模板。完成引导后，可以在“我们家 → 家庭成员”继续添加、编辑或停用成员。",
      tasksTitle: "2. 任务、完成与审核",
      tasksText: "在“任务”中创建一次性或重复任务，设置参与成员、积分、子任务、截止时间和是否需要照片凭证。家长记录孩子的完成情况；如开启审核，可在确认完成后发放积分。需要更正时，可在积分记录中执行冲正。",
      rewardsTitle: "3. 奖励、目标与成长记录",
      rewardsText: "在“奖励”中设置家庭共同约定的兑换项目。申请兑换后，家长可以确认扣分，并在完成兑现后标记。“长期目标”适合每天打卡的习惯；“成长相册”可以用照片和一句话记下值得回顾的时刻。",
      settingsTitle: "4. 提醒、应用锁与 iCloud",
      settingsText: "在“我们家 → 设置”中，可以开启每日提醒和任务时间提醒，使用 Face ID、Touch ID 或设备密码保护 App，以及开启 iCloud 自动备份。可在备份管理页面查看并手动选择恢复点；恢复前请确认时间，避免覆盖当前内容。",
      inviteTitle: "5. 家长使用方式",
      inviteText: "本 App 面向家长或监护人，用于记录和管理孩子的家庭任务、积分与成长内容。当前版本不提供家庭成员邀请或多人实时同步；iCloud 自动备份仅用于家长恢复数据或在登录同一 Apple 账号的设备上迁移数据。",
      supportTitle: "6. 获取支持",
      supportText: "如果遇到问题，请先查看<a data-local-link href=\"support.html\">支持页面</a>。仍需要帮助时，请发送邮件至 <a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a>，并附上设备型号、iOS 版本、App 版本和问题复现步骤。请不要在邮件中附上家人的私密内容或成长照片。"
    },
    privacy: {
      title: "檐下见长隐私政策",
      description: "檐下见长隐私政策。",
      eyebrow: "隐私政策",
      heading: "檐下见长隐私政策",
      meta: "生效日期：2026 年 7 月 25 日 · 更新日期：2026 年 8 月 2 日",
      intro: "《檐下见长》（以下简称“本 App”）尊重您和家人的隐私。本政策说明本 App 处理数据的方式。",
      dataTitle: "1. 本 App 处理的数据",
      dataText: "您可以主动输入家人昵称、头像标识、任务、积分、奖励、目标、公告、操作记录、任务完成说明和成长纪念等内容。只有当您主动选择照片时，本 App 才会读取选中的图片。本 App 不要求注册开发者账号，不集成广告、用户跟踪或第三方分析服务。",
      storageTitle: "2. 数据的使用和存储",
      storageText: "这些数据仅用于提供您选择的功能，例如计算积分、展示任务和成长记录、生成本地提醒、保护 App 访问，以及在您开启时创建 iCloud 备份。数据默认保存在您的设备上。开启 iCloud 自动备份后，相关数据和您选择的照片会保存到您 Apple 账号的 iCloud Drive 中，并受 Apple 服务条款和您的 iCloud 设置约束。",
      permissionsTitle: "3. 系统权限",
      permissionsText: "本 App 可能请求通知权限，用于您主动开启的每日或任务提醒；可能调用 Face ID、Touch ID 或设备密码验证，用于您主动开启的应用锁；并通过系统照片选择器读取您明确选中的照片。生物识别信息由 iOS 完成验证，本 App 不会读取或保存面容、指纹数据或设备密码。您可以随时在系统设置或 App 设置中调整相关功能。",
      sharingTitle: "4. 共享与第三方服务",
      sharingText: "本 App 不会向开发者的服务器上传或出售您的家庭数据，也不提供家庭成员邀请或多人实时共享。iCloud 备份保存在您的 Apple 账号下。若您主动导出备份文件并交给他人，请自行确认接收方可信，并避免传播不必要的敏感信息。",
      choicesTitle: "5. 您的选择与数据删除",
      choicesText: "您可以在本 App 内修改或删除相关家庭内容，关闭 iCloud 自动备份、提醒或应用锁，并在备份管理页面删除不再需要的 iCloud 备份。删除 App 会移除设备上的本地数据；已保存到 iCloud 的备份可能仍需通过本 App 或 Apple 提供的 iCloud 管理方式另行删除。",
      childrenTitle: "6. 儿童隐私",
      childrenText: "本 App 面向家长或监护人，用于管理与孩子有关的家庭任务和成长记录，不提供儿童账号或面向儿童的在线服务。家长或监护人应负责创建、管理和保护与未成年家庭成员有关的内容。本 App 不会故意向开发者收集儿童的个人信息。",
      updatesTitle: "7. 政策更新",
      updatesText: "当功能或数据处理方式发生变化时，我们可能更新本政策。新版本将发布在本页面，并标注更新日期。",
      contactTitle: "8. 联系我们",
      contactText: "如对本政策或数据处理有疑问，请发送邮件至 <a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a>。"
    },
    terms: {
      title: "檐下见长用户协议",
      description: "檐下见长用户协议。",
      eyebrow: "用户协议",
      heading: "檐下见长用户协议",
      meta: "生效日期：2026 年 7 月 25 日 · 更新日期：2026 年 8 月 2 日",
      intro: "欢迎使用《檐下见长》（以下简称“本 App”）。下载、安装或使用本 App，即表示您同意遵守本协议。如果您不同意，请停止使用本 App。",
      serviceTitle: "1. 服务说明",
      serviceText: "本 App 面向家长或监护人，提供家庭成员、任务、积分、奖励、长期目标、成长记录、本地提醒和 iCloud 备份等管理工具。家庭内的积分、奖励和约定仅是用户自行设定的记录，不是法定货币、电子货币、金融产品或开发者作出的兑付承诺。",
      rulesTitle: "2. 使用规则",
      rulesText: "您应对输入、导出和管理的内容负责，并确保有权使用其中的文字和照片。您不得利用本 App 从事违法活动，不得侵害他人隐私、知识产权或其他合法权益。家长或监护人应负责管理与未成年家庭成员有关的内容并保护其隐私。",
      servicesTitle: "3. 账号、费用与第三方服务",
      servicesText: "本 App 当前不要求注册开发者账号，也不在 App 内提供订阅或内购。iCloud Drive、系统通知、生物识别和照片选择器由 Apple 及操作系统提供，其可用性、容量和使用也受 Apple 的条款、账号状态、设备设置和网络环境影响。",
      dataTitle: "4. 数据与备份责任",
      dataText: "您应谨慎管理家庭数据和恢复操作，并在需要时开启及检查 iCloud 备份。由于设备故障、误操作、账号或网络异常、系统限制或第三方服务中断，备份可能延迟、不可用或无法恢复。在适用法律允许的范围内，开发者不对未能恢复的数据或家庭成员之间的约定履行承担责任。",
      ipTitle: "5. 知识产权",
      ipText: "本 App 的软件、界面、图标、文档及相关内容的权利归开发者或相应权利人所有。您保留对自己输入内容依法享有的权利。未经允许，不得复制、修改、分发、出售或反向工程本 App，但适用法律明确允许的情形除外。",
      disclaimerTitle: "6. 免责声明与责任限制",
      disclaimerText: "本 App 按“现状”和“可用”基础提供，不保证永久无错、不中断或适合每个家庭的特定目的。本 App 是家庭记录工具，不提供教育、医疗、心理、法律或财务建议。在适用法律允许的最大范围内，开发者不对间接、偶发、特殊或后果性损失承担责任。本条不排除法律不允许排除的责任。",
      changesTitle: "7. 协议变更与服务终止",
      changesText: "我们可能因功能、法律或运营需要更新本协议，并在本页面标注更新日期。您可以随时停止使用并删除本 App。我们也可能在必要时修改、暂停或终止部分功能。",
      lawTitle: "8. 适用法律",
      lawText: "本协议适用您所在地的强制性消费者保护和其他适用法律。任何争议应先通过友好协商解决；协商不成的，按适用法律规定处理。",
      contactTitle: "9. 联系我们",
      contactText: "如对本协议有疑问，请发送邮件至 <a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a>。"
    },
    support: {
      title: "檐下见长支持",
      description: "檐下见长支持与常见问题。",
      eyebrow: "使用支持",
      heading: "檐下见长使用支持",
      meta: "适用版本：1.0 · 更新日期：2026 年 8 月 2 日",
      intro: "下面列出了常见问题的排查方法。更完整的功能说明请查看<a data-local-link href=\"user-guide.html\">使用说明</a>。",
      notificationsTitle: "为什么收不到提醒？",
      notificationsText: "请先在 App 的“我们家 → 设置”中确认已开启提醒，再在 iPhone 或 iPad 的“设置 → 通知 → 檐下见长”中允许通知。如果任务提醒时间已经过去，请编辑任务并设置新的时间。",
      backupTitle: "为什么 iCloud 备份不可用？",
      backupText: "请确认设备已登录 Apple 账号、已开启 iCloud Drive、网络正常且 iCloud 存储空间充足。模拟器上的 iCloud 功能可能受限，建议在已登录 iCloud 的真机上测试。",
      sharingTitle: "可以邀请家人或多人实时同步吗？",
      sharingText: "当前版本不提供家庭成员邀请、多人协作或实时同步。本 App 面向家长管理家庭数据；iCloud 功能用于创建可手动选择的备份恢复点，也可在登录同一 Apple 账号的设备上恢复数据。",
      lockTitle: "忘记应用锁怎么办？",
      lockText: "应用锁使用 Face ID、Touch ID 或设备密码验证，本 App 不会另外保存一个密码。请使用设备密码解锁；如果设备验证不可用，请先在系统设置中恢复设备密码或生物识别。",
      restoreTitle: "如何恢复误删的数据？",
      restoreText: "如果之前已开启 iCloud 自动备份，请前往“我们家 → 设置 → 管理与恢复备份”，选择删除前的恢复点。恢复会更换当前家庭数据，请仔细确认备份时间。如果没有可用备份，已删除的数据可能无法恢复。",
      contactTitle: "联系支持",
      contactText: "请发送邮件至 <a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a>，并说明设备型号、iOS 版本、App 版本、屏幕上显示的错误信息和复现步骤。请不要发送真实姓名、私密家庭记录或成长照片。"
    }
  },
  ja: {
    common: {
      brand: "いっしょに育つ",
      brandMark: "育",
      homeLabel: "App Pages ホーム",
      back: "← いっしょに育つに戻る",
      languageLabel: "言語を選択",
      copyright: "© 2026 いっしょに育つ"
    },
    home: {
      title: "いっしょに育つ · ドキュメントとサポート",
      description: "いっしょに育つのユーザーガイド、プライバシーポリシー、利用規約、サポート情報。",
      eyebrow: "いっしょに育つ",
      heading: "小さなポイントが、<br>目に見える成長に。",
      lead: "家族のタスク、ポイントとごほうび、長期目標、成長アルバムで、毎日の前進を記録します。",
      viewDocuments: "ドキュメントを見る",
      documentsEyebrow: "ドキュメント",
      documentsTitle: "ドキュメントとサポート",
      guideTitle: "ユーザーガイド",
      guideText: "はじめ方、主な機能、よく使う操作",
      privacyTitle: "プライバシーポリシー",
      privacyText: "データ保存、iCloudバックアップ、権限の利用について",
      termsTitle: "利用規約",
      termsText: "利用ルール、サービス範囲、責任について",
      supportTitle: "サポート",
      supportText: "よくある質問、トラブル解決、お問い合わせ"
    },
    guide: {
      title: "いっしょに育つ ユーザーガイド",
      description: "いっしょに育つのユーザーガイド。",
      eyebrow: "ユーザーガイド",
      heading: "いっしょに育つ ユーザーガイド",
      meta: "対象バージョン：1.0 · 更新日：2026年8月2日",
      intro: "「いっしょに育つ」は、タスク、ポイント、ごほうび、成長記録を使って、家族の毎日の前進を具体的に見える形にします。",
      startTitle: "1. はじめに",
      startText: "初回起動時に、保護者とお子さまのニックネームを入力し、よく使うタスクのテンプレートを選びます。案内の完了後も「わが家 → 家族メンバー」でメンバーの追加、編集、無効化ができます。",
      tasksTitle: "2. タスク、完了、確認",
      tasksText: "「タスク」で単発または繰り返しのタスクを作り、参加メンバー、ポイント、サブタスク、期限、写真による証明の要否を設定します。保護者がお子さまの完了状況を記録し、承認を有効にした場合は、確認後にポイントを付与します。修正が必要な場合は、ポイント履歴から取り消し処理ができます。",
      rewardsTitle: "3. ごほうび、目標、成長記録",
      rewardsText: "「ごほうび」で家族で決めた交換アイテムを設定します。交換申請後、保護者がポイントの差し引きを確認し、実際に渡した後で完了にできます。「長期目標」は毎日の習慣に、「成長アルバム」は写真と一言で残したい瞬間を記録するのに適しています。",
      settingsTitle: "4. 通知、アプリロック、iCloud",
      settingsText: "「わが家 → 設定」で、毎日の通知やタスク時刻の通知、Face ID・Touch ID・デバイスのパスコードによるアプリ保護、iCloud自動バックアップを有効にできます。バックアップ管理画面で復元ポイントを確認して選べます。現在の内容を上書きしないよう、復元前に日時を確認してください。",
      inviteTitle: "5. 保護者による利用",
      inviteText: "本アプリは、保護者がお子さまの家庭内タスク、ポイント、成長記録を管理するためのものです。現在のバージョンには、家族の招待や複数人でのリアルタイム同期はありません。iCloud自動バックアップは、保護者によるデータ復元、または同じApple Accountでサインインした端末への移行に使用します。",
      supportTitle: "6. サポート",
      supportText: "問題がある場合は、まず<a data-local-link href=\"support.html\">サポートページ</a>をご覧ください。さらにサポートが必要な場合は、デバイスモデル、iOSバージョン、アプリバージョン、再現手順を添えて <a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a> までメールでお問い合わせください。家族の個人的な内容や成長写真は添付しないでください。"
    },
    privacy: {
      title: "いっしょに育つ プライバシーポリシー",
      description: "いっしょに育つのプライバシーポリシー。",
      eyebrow: "プライバシーポリシー",
      heading: "いっしょに育つ プライバシーポリシー",
      meta: "発効日：2026年7月25日 · 更新日：2026年8月2日",
      intro: "「いっしょに育つ」（以下「本アプリ」）は、お客様とご家族のプライバシーを尊重します。本ポリシーでは、本アプリによるデータの取り扱いについて説明します。",
      dataTitle: "1. 本アプリが処理するデータ",
      dataText: "家族のニックネーム、アバターの識別情報、タスク、ポイント、ごほうび、目標、お知らせ、操作履歴、タスク完了メモ、成長の記念などをお客様が入力できます。写真は、お客様が選択した場合に限り、選択された画像を読み取ります。本アプリは開発者アカウントへの登録を求めず、広告、ユーザートラッキング、第三者分析サービスを組み込みません。",
      storageTitle: "2. データの利用と保存",
      storageText: "これらのデータは、ポイント計算、タスクや成長記録の表示、端末内通知、アプリへのアクセス保護、お客様が有効にしたiCloudバックアップなど、選択された機能の提供にのみ使用されます。データは初期状態では端末に保存されます。iCloud自動バックアップを有効にすると、関連データと選択した写真は、お客様のApple AccountのiCloud Driveに保存され、Appleの利用規約とiCloud設定が適用されます。",
      permissionsTitle: "3. システム権限",
      permissionsText: "本アプリは、お客様が有効にした毎日またはタスクの通知のために通知権限を求める場合があります。また、アプリロックのためにFace ID、Touch ID、デバイスのパスコードによる認証を利用し、システムの写真選択画面から明示的に選ばれた写真を読み取る場合があります。生体認証はiOSが実行し、本アプリが顔、指紋、デバイスのパスコードを読み取ったり保存したりすることはありません。これらの機能はシステム設定またはアプリ設定でいつでも変更できます。",
      sharingTitle: "4. 共有と第三者サービス",
      sharingText: "本アプリがお客様の家族データを開発者のサーバーへアップロードしたり、販売したりすることはなく、家族の招待や複数人でのリアルタイム共有も提供しません。iCloudバックアップはお客様のApple Accountに保存されます。バックアップファイルを自ら書き出して他者へ渡す場合は、信頼できる相手であることを確認し、不要な機密情報を共有しないでください。",
      choicesTitle: "5. お客様の選択とデータ削除",
      choicesText: "本アプリ内で家族の内容を変更または削除し、iCloud自動バックアップ、通知、アプリロックを無効にし、バックアップ管理画面で不要なiCloudバックアップを削除できます。アプリを削除すると端末上のローカルデータは削除されます。iCloudに保存されたバックアップは、本アプリまたはAppleが提供するiCloud管理機能で別途削除する必要がある場合があります。",
      childrenTitle: "6. お子さまのプライバシー",
      childrenText: "本アプリは、保護者がお子さまの家庭内タスクや成長記録を管理するためのもので、子ども用アカウントや子ども向けオンラインサービスは提供しません。保護者は、未成年の家族メンバーに関する内容の作成、管理、保護に責任を負うものとします。本アプリが子どもの個人情報を開発者へ意図的に収集することはありません。",
      updatesTitle: "7. ポリシーの更新",
      updatesText: "機能やデータの取り扱いが変わった場合、本ポリシーを更新することがあります。新版は更新日とともにこのページへ掲載します。",
      contactTitle: "8. お問い合わせ",
      contactText: "本ポリシーまたはデータ処理についてご質問がある場合は、<a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a> までメールでお問い合わせください。"
    },
    terms: {
      title: "いっしょに育つ 利用規約",
      description: "いっしょに育つの利用規約。",
      eyebrow: "利用規約",
      heading: "いっしょに育つ 利用規約",
      meta: "発効日：2026年7月25日 · 更新日：2026年8月2日",
      intro: "「いっしょに育つ」（以下「本アプリ」）をご利用いただきありがとうございます。本アプリをダウンロード、インストール、または使用することで、本規約に同意したものとみなされます。同意されない場合は利用を中止してください。",
      serviceTitle: "1. サービスの説明",
      serviceText: "本アプリは保護者向けに、家族メンバー、タスク、ポイント、ごほうび、長期目標、成長記録、端末内通知、iCloudバックアップの管理ツールを提供します。家族内のポイント、ごほうび、取り決めは利用者が設定する記録にすぎず、法定通貨、電子マネー、金融商品、または開発者による履行の約束ではありません。",
      rulesTitle: "2. 利用ルール",
      rulesText: "入力、書き出し、管理する内容について責任を負い、その文章や写真を利用する権利があることを確認してください。本アプリを違法行為に利用したり、他者のプライバシー、知的財産権、その他の法的権利を侵害したりしてはなりません。保護者は未成年の家族メンバーに関する内容を管理し、そのプライバシーを保護する責任を負います。",
      servicesTitle: "3. アカウント、料金、第三者サービス",
      servicesText: "現在、本アプリは開発者アカウントへの登録を求めず、アプリ内のサブスクリプションや購入を提供していません。iCloud Drive、システム通知、生体認証、写真選択画面はAppleおよびOSが提供し、その利用可否、容量、使用にはAppleの規約、アカウント状態、デバイス設定、ネットワーク環境が影響します。",
      dataTitle: "4. データとバックアップに関する責任",
      dataText: "家族データと復元操作を慎重に管理し、必要に応じてiCloudバックアップを有効化して確認してください。デバイスの故障、誤操作、アカウントやネットワークの問題、システム制限、第三者サービスの停止により、バックアップが遅延、利用不能、または復元不能になる場合があります。適用法で認められる範囲において、開発者は復元できなかったデータや家族間の取り決めの履行について責任を負いません。",
      ipTitle: "5. 知的財産権",
      ipText: "本アプリのソフトウェア、インターフェース、アイコン、文書、関連コンテンツの権利は、開発者または各権利者に帰属します。お客様が入力した内容に対して法的に有する権利はお客様に留保されます。適用法で明示的に認められる場合を除き、許可なく本アプリを複製、変更、配布、販売、リバースエンジニアリングしてはなりません。",
      disclaimerTitle: "6. 免責事項と責任の制限",
      disclaimerText: "本アプリは「現状有姿」かつ「提供可能な状態」で提供され、常にエラーがなく中断しないこと、またはすべての家族の特定目的に適することを保証しません。本アプリは家族の記録ツールであり、教育、医療、心理、法律、金融上の助言を提供するものではありません。適用法で認められる最大限の範囲において、開発者は間接的、偶発的、特別、結果的な損害について責任を負いません。本項は法令上排除できない責任を排除するものではありません。",
      changesTitle: "7. 規約の変更とサービス終了",
      changesText: "機能、法律、運用上の必要に応じて本規約を更新し、このページに更新日を表示することがあります。お客様はいつでも利用を中止して本アプリを削除できます。当方も必要に応じて一部機能を変更、停止、終了する場合があります。",
      lawTitle: "8. 準拠法",
      lawText: "本規約には、お客様の所在地で強制的に適用される消費者保護法その他の適用法が適用されます。紛争はまず友好的な協議による解決を試み、解決しない場合は適用法に従って処理します。",
      contactTitle: "9. お問い合わせ",
      contactText: "本規約についてご質問がある場合は、<a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a> までメールでお問い合わせください。"
    },
    support: {
      title: "いっしょに育つ サポート",
      description: "いっしょに育つのサポートとよくある質問。",
      eyebrow: "サポート",
      heading: "いっしょに育つ サポート",
      meta: "対象バージョン：1.0 · 更新日：2026年8月2日",
      intro: "よくある問題の解決方法を以下にまとめています。詳しい機能については<a data-local-link href=\"user-guide.html\">ユーザーガイド</a>をご覧ください。",
      notificationsTitle: "通知が届かないのはなぜですか？",
      notificationsText: "まずアプリの「わが家 → 設定」で通知が有効になっていることを確認し、次にiPhoneまたはiPadの「設定 → 通知 → いっしょに育つ」で通知を許可してください。タスクの通知時刻がすでに過ぎている場合は、タスクを編集して新しい時刻を設定してください。",
      backupTitle: "iCloudバックアップを使えないのはなぜですか？",
      backupText: "デバイスでApple Accountにサインインしていること、iCloud Driveが有効であること、ネットワークが正常でiCloudの空き容量が十分にあることを確認してください。シミュレータではiCloud機能が制限される場合があるため、iCloudにサインインした実機での確認をおすすめします。",
      sharingTitle: "家族を招待したり、複数人でリアルタイム同期できますか？",
      sharingText: "現在のバージョンには、家族の招待、複数人での共同利用、リアルタイム同期はありません。本アプリは保護者が家族データを管理するためのものです。iCloud機能は手動で選べる復元ポイントを作成し、同じApple Accountでサインインした端末へデータを復元するために使用します。",
      lockTitle: "アプリロックを解除できない場合は？",
      lockText: "アプリロックにはFace ID、Touch ID、またはデバイスのパスコードを使用し、本アプリが別のパスワードを保存することはありません。デバイスのパスコードで解除してください。デバイス認証を利用できない場合は、先にシステム設定でパスコードまたは生体認証を復旧してください。",
      restoreTitle: "誤って削除したデータを復元するには？",
      restoreText: "以前にiCloud自動バックアップを有効にしていた場合は、「わが家 → 設定 → バックアップの管理と復元」で削除前の復元ポイントを選びます。復元すると現在の家族データが置き換わるため、バックアップ日時をよく確認してください。利用できるバックアップがない場合、削除したデータは復元できないことがあります。",
      contactTitle: "サポートへのお問い合わせ",
      contactText: "デバイスモデル、iOSバージョン、アプリバージョン、画面に表示されたエラー、再現手順を記載して、<a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a> までメールでお問い合わせください。実名、非公開の家族記録、成長写真は送信しないでください。"
    }
  },
  ko: {
    common: {
      brand: "함께 자라요",
      brandMark: "함",
      homeLabel: "App Pages 홈",
      back: "← 함께 자라요로 돌아가기",
      languageLabel: "언어 선택",
      copyright: "© 2026 함께 자라요"
    },
    home: {
      title: "함께 자라요 · 문서 및 지원",
      description: "함께 자라요의 사용 설명서, 개인정보 처리방침, 이용약관 및 지원 정보입니다.",
      eyebrow: "함께 자라요",
      heading: "작은 포인트로,<br>성장이 눈앞에.",
      lead: "가족 할 일, 포인트 보상, 장기 목표와 성장 앨범으로 매일의 발전을 기록하세요.",
      viewDocuments: "문서 보기",
      documentsEyebrow: "문서",
      documentsTitle: "문서 및 지원",
      guideTitle: "사용 설명서",
      guideText: "시작하기, 주요 기능 및 자주 쓰는 방법",
      privacyTitle: "개인정보 처리방침",
      privacyText: "데이터 저장, iCloud 백업 및 권한 사용 안내",
      termsTitle: "이용약관",
      termsText: "이용 규칙, 서비스 범위 및 책임 안내",
      supportTitle: "지원 받기",
      supportText: "자주 묻는 질문, 문제 해결 및 문의 방법"
    },
    guide: {
      title: "함께 자라요 사용 설명서",
      description: "함께 자라요 사용 설명서입니다.",
      eyebrow: "사용 설명서",
      heading: "함께 자라요 사용 설명서",
      meta: "지원 버전: 1.0 · 업데이트: 2026년 8월 2일",
      intro: "함께 자라요는 할 일, 포인트, 보상 및 성장 기록으로 가족의 매일의 발전을 구체적으로 보여 줍니다.",
      startTitle: "1. 시작하기",
      startText: "앱을 처음 열면 보호자와 자녀의 별명을 입력한 다음 자주 쓰는 할 일 템플릿을 선택하세요. 안내를 마친 뒤에도 ‘우리 집 → 가족 구성원’에서 구성원을 추가하거나 편집하고 비활성화할 수 있습니다.",
      tasksTitle: "2. 할 일, 완료 및 확인",
      tasksText: "‘할 일’에서 일회성 또는 반복 할 일을 만들고 참여 구성원, 포인트, 하위 할 일, 마감 시간 및 사진 증빙 필요 여부를 설정하세요. 부모 또는 보호자가 자녀의 완료 상태를 기록하며, 승인을 켠 경우 확인 후 포인트를 지급합니다. 수정이 필요하면 포인트 기록에서 취소 처리를 할 수 있습니다.",
      rewardsTitle: "3. 보상, 목표 및 성장 기록",
      rewardsText: "‘보상’에서 가족이 함께 정한 교환 항목을 설정하세요. 교환 요청 후 보호자가 포인트 차감을 확인하고 실제로 제공한 뒤 완료로 표시할 수 있습니다. ‘장기 목표’는 매일 실천하는 습관에 적합하며, ‘성장 앨범’에는 사진과 한마디로 기억하고 싶은 순간을 남길 수 있습니다.",
      settingsTitle: "4. 알림, 앱 잠금 및 iCloud",
      settingsText: "‘우리 집 → 설정’에서 매일 알림과 할 일 시간 알림을 켜고, Face ID, Touch ID 또는 기기 암호로 앱을 보호하며, iCloud 자동 백업을 활성화할 수 있습니다. 백업 관리 화면에서 복원 지점을 확인하고 직접 선택할 수 있습니다. 현재 내용을 덮어쓰지 않도록 복원 전에 시간을 확인하세요.",
      inviteTitle: "5. 부모 및 보호자용 사용 방식",
      inviteText: "본 앱은 부모 또는 보호자가 자녀의 가정 내 할 일, 포인트 및 성장 기록을 관리하기 위한 도구입니다. 현재 버전은 가족 초대나 여러 사용자의 실시간 동기화를 제공하지 않습니다. iCloud 자동 백업은 부모가 데이터를 복원하거나 동일한 Apple 계정으로 로그인한 기기로 데이터를 이전할 때 사용합니다.",
      supportTitle: "6. 지원 받기",
      supportText: "문제가 생기면 먼저 <a data-local-link href=\"support.html\">지원 페이지</a>를 확인하세요. 도움이 더 필요하면 기기 모델, iOS 버전, 앱 버전 및 문제 재현 단계를 포함하여 <a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a>으로 이메일을 보내 주세요. 가족의 비공개 내용이나 성장 사진은 첨부하지 마세요."
    },
    privacy: {
      title: "함께 자라요 개인정보 처리방침",
      description: "함께 자라요 개인정보 처리방침입니다.",
      eyebrow: "개인정보 처리방침",
      heading: "함께 자라요 개인정보 처리방침",
      meta: "시행일: 2026년 7월 25일 · 업데이트: 2026년 8월 2일",
      intro: "함께 자라요(이하 ‘본 앱’)는 사용자와 가족의 개인정보를 존중합니다. 이 방침은 본 앱이 데이터를 처리하는 방식을 설명합니다.",
      dataTitle: "1. 본 앱이 처리하는 데이터",
      dataText: "사용자는 가족 별명, 아바타 식별 정보, 할 일, 포인트, 보상, 목표, 공지, 작업 기록, 할 일 완료 메모 및 성장 기념 등의 내용을 직접 입력할 수 있습니다. 사진은 사용자가 직접 선택한 경우에만 선택된 이미지를 읽습니다. 본 앱은 개발자 계정 등록을 요구하지 않으며 광고, 사용자 추적 또는 제3자 분석 서비스를 포함하지 않습니다.",
      storageTitle: "2. 데이터 사용 및 저장",
      storageText: "이 데이터는 포인트 계산, 할 일과 성장 기록 표시, 기기 내 알림 생성, 앱 접근 보호 및 사용자가 활성화한 iCloud 백업 등 선택한 기능을 제공하는 데만 사용됩니다. 데이터는 기본적으로 사용자의 기기에 저장됩니다. iCloud 자동 백업을 켜면 관련 데이터와 선택한 사진이 사용자의 Apple 계정에 연결된 iCloud Drive에 저장되며 Apple 서비스 약관과 iCloud 설정의 적용을 받습니다.",
      permissionsTitle: "3. 시스템 권한",
      permissionsText: "본 앱은 사용자가 켠 매일 알림 또는 할 일 알림을 위해 알림 권한을 요청할 수 있습니다. 또한 사용자가 켠 앱 잠금을 위해 Face ID, Touch ID 또는 기기 암호 인증을 사용하고, 시스템 사진 선택기를 통해 사용자가 명시적으로 선택한 사진을 읽을 수 있습니다. 생체 인증은 iOS에서 처리하며 본 앱은 얼굴, 지문 데이터 또는 기기 암호를 읽거나 저장하지 않습니다. 관련 기능은 시스템 설정 또는 앱 설정에서 언제든지 변경할 수 있습니다.",
      sharingTitle: "4. 공유 및 제3자 서비스",
      sharingText: "본 앱은 사용자의 가족 데이터를 개발자 서버에 업로드하거나 판매하지 않으며 가족 초대 또는 여러 사용자의 실시간 공유 기능도 제공하지 않습니다. iCloud 백업은 사용자의 Apple 계정에 저장됩니다. 백업 파일을 직접 내보내 다른 사람에게 전달하는 경우 신뢰할 수 있는 수신자인지 확인하고 불필요한 민감 정보를 공유하지 마세요.",
      choicesTitle: "5. 사용자의 선택 및 데이터 삭제",
      choicesText: "본 앱 안에서 가족 내용을 수정하거나 삭제하고 iCloud 자동 백업, 알림 또는 앱 잠금을 끌 수 있으며, 백업 관리 화면에서 더 이상 필요하지 않은 iCloud 백업을 삭제할 수 있습니다. 앱을 삭제하면 기기의 로컬 데이터가 제거됩니다. iCloud에 저장된 백업은 본 앱 또는 Apple이 제공하는 iCloud 관리 방법을 통해 별도로 삭제해야 할 수 있습니다.",
      childrenTitle: "6. 아동 개인정보",
      childrenText: "본 앱은 부모 또는 보호자가 자녀의 가정 내 할 일과 성장 기록을 관리하기 위한 도구이며 아동 계정이나 아동 대상 온라인 서비스를 제공하지 않습니다. 부모 또는 보호자는 미성년 가족 구성원과 관련된 내용을 만들고 관리하며 보호할 책임이 있습니다. 본 앱은 아동의 개인정보를 개발자에게 고의로 수집하지 않습니다.",
      updatesTitle: "7. 방침 업데이트",
      updatesText: "기능 또는 데이터 처리 방식이 바뀌면 이 방침을 업데이트할 수 있습니다. 새 버전은 업데이트 날짜와 함께 이 페이지에 게시됩니다.",
      contactTitle: "8. 문의하기",
      contactText: "이 방침 또는 데이터 처리에 관한 질문은 <a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a>으로 이메일을 보내 주세요."
    },
    terms: {
      title: "함께 자라요 이용약관",
      description: "함께 자라요 이용약관입니다.",
      eyebrow: "이용약관",
      heading: "함께 자라요 이용약관",
      meta: "시행일: 2026년 7월 25일 · 업데이트: 2026년 8월 2일",
      intro: "함께 자라요(이하 ‘본 앱’)를 이용해 주셔서 감사합니다. 본 앱을 다운로드, 설치 또는 사용하면 이 약관에 동의한 것으로 간주합니다. 동의하지 않으면 사용을 중단하세요.",
      serviceTitle: "1. 서비스 설명",
      serviceText: "본 앱은 부모 또는 보호자를 대상으로 가족 구성원, 할 일, 포인트, 보상, 장기 목표, 성장 기록, 기기 내 알림 및 iCloud 백업 관리 도구를 제공합니다. 가족 안의 포인트, 보상 및 약속은 사용자가 직접 설정한 기록일 뿐이며 법정 화폐, 전자 화폐, 금융 상품 또는 개발자의 이행 약속이 아닙니다.",
      rulesTitle: "2. 이용 규칙",
      rulesText: "사용자는 입력, 내보내기 및 관리하는 내용에 책임을 지며 그 안의 글과 사진을 사용할 권리가 있는지 확인해야 합니다. 본 앱을 불법 활동에 사용하거나 다른 사람의 개인정보, 지식재산권 또는 기타 법적 권리를 침해해서는 안 됩니다. 부모 또는 보호자는 미성년 가족 구성원과 관련된 내용을 관리하고 개인정보를 보호할 책임이 있습니다.",
      servicesTitle: "3. 계정, 비용 및 제3자 서비스",
      servicesText: "현재 본 앱은 개발자 계정 등록을 요구하지 않으며 앱 내 구독이나 구매를 제공하지 않습니다. iCloud Drive, 시스템 알림, 생체 인증 및 사진 선택기는 Apple과 운영체제에서 제공하며, 사용 가능 여부, 용량 및 사용은 Apple 약관, 계정 상태, 기기 설정 및 네트워크 환경의 영향을 받습니다.",
      dataTitle: "4. 데이터 및 백업 책임",
      dataText: "가족 데이터와 복원 작업을 주의해서 관리하고 필요하면 iCloud 백업을 켜서 확인하세요. 기기 고장, 실수, 계정 또는 네트워크 문제, 시스템 제한 또는 제3자 서비스 중단으로 인해 백업이 지연되거나 사용할 수 없거나 복원되지 않을 수 있습니다. 관련 법률이 허용하는 범위에서 개발자는 복원하지 못한 데이터 또는 가족 구성원 간 약속의 이행에 책임을 지지 않습니다.",
      ipTitle: "5. 지식재산권",
      ipText: "본 앱의 소프트웨어, 인터페이스, 아이콘, 문서 및 관련 콘텐츠의 권리는 개발자 또는 해당 권리자에게 있습니다. 사용자가 입력한 콘텐츠에 대해 법적으로 보유한 권리는 사용자에게 유지됩니다. 관련 법률이 명시적으로 허용하는 경우를 제외하고, 허가 없이 본 앱을 복제, 수정, 배포, 판매 또는 리버스 엔지니어링해서는 안 됩니다.",
      disclaimerTitle: "6. 면책 및 책임 제한",
      disclaimerText: "본 앱은 ‘있는 그대로’ 및 ‘이용 가능한 상태’로 제공되며 항상 오류가 없거나 중단되지 않거나 모든 가족의 특정 목적에 적합함을 보장하지 않습니다. 본 앱은 가족 기록 도구이며 교육, 의료, 심리, 법률 또는 재정 조언을 제공하지 않습니다. 관련 법률이 허용하는 최대 범위에서 개발자는 간접적, 우발적, 특별 또는 결과적 손해에 책임을 지지 않습니다. 이 조항은 법률상 배제할 수 없는 책임을 배제하지 않습니다.",
      changesTitle: "7. 약관 변경 및 서비스 중단",
      changesText: "기능, 법률 또는 운영상 필요에 따라 이 약관을 업데이트하고 이 페이지에 업데이트 날짜를 표시할 수 있습니다. 사용자는 언제든지 사용을 중단하고 본 앱을 삭제할 수 있습니다. 필요한 경우 일부 기능을 변경, 일시 중단 또는 종료할 수도 있습니다.",
      lawTitle: "8. 준거법",
      lawText: "이 약관에는 사용자 소재지에서 강제 적용되는 소비자 보호법 및 기타 관련 법률이 적용됩니다. 분쟁은 먼저 우호적인 협의를 통해 해결하며, 해결되지 않으면 관련 법률에 따라 처리합니다.",
      contactTitle: "9. 문의하기",
      contactText: "이 약관에 관한 질문은 <a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a>으로 이메일을 보내 주세요."
    },
    support: {
      title: "함께 자라요 지원",
      description: "함께 자라요 지원 및 자주 묻는 질문입니다.",
      eyebrow: "지원",
      heading: "함께 자라요 지원",
      meta: "지원 버전: 1.0 · 업데이트: 2026년 8월 2일",
      intro: "자주 발생하는 문제의 해결 방법은 다음과 같습니다. 자세한 기능 설명은 <a data-local-link href=\"user-guide.html\">사용 설명서</a>를 확인하세요.",
      notificationsTitle: "알림이 오지 않는 이유는 무엇인가요?",
      notificationsText: "먼저 앱의 ‘우리 집 → 설정’에서 알림이 켜져 있는지 확인한 다음, iPhone 또는 iPad의 ‘설정 → 알림 → 함께 자라요’에서 알림을 허용하세요. 할 일 알림 시간이 이미 지났다면 할 일을 편집하여 새 시간을 설정하세요.",
      backupTitle: "iCloud 백업을 사용할 수 없는 이유는 무엇인가요?",
      backupText: "기기가 Apple 계정에 로그인되어 있고 iCloud Drive가 켜져 있으며 네트워크가 정상이고 iCloud 저장 공간이 충분한지 확인하세요. 시뮬레이터에서는 iCloud 기능이 제한될 수 있으므로 iCloud에 로그인된 실제 기기에서 테스트하는 것이 좋습니다.",
      sharingTitle: "가족을 초대하거나 여러 사용자가 실시간으로 동기화할 수 있나요?",
      sharingText: "현재 버전은 가족 초대, 여러 사용자 협업 또는 실시간 동기화를 제공하지 않습니다. 본 앱은 부모가 가족 데이터를 관리하기 위한 도구입니다. iCloud 기능은 사용자가 직접 선택할 수 있는 복원 지점을 만들고 동일한 Apple 계정으로 로그인한 기기에서 데이터를 복원하는 데 사용됩니다.",
      lockTitle: "앱 잠금을 해제할 수 없으면 어떻게 하나요?",
      lockText: "앱 잠금은 Face ID, Touch ID 또는 기기 암호로 인증하며 본 앱은 별도의 암호를 저장하지 않습니다. 기기 암호로 잠금을 해제하세요. 기기 인증을 사용할 수 없다면 먼저 시스템 설정에서 기기 암호 또는 생체 인증을 복구하세요.",
      restoreTitle: "실수로 삭제한 데이터를 복원하려면 어떻게 하나요?",
      restoreText: "이전에 iCloud 자동 백업을 켰다면 ‘우리 집 → 설정 → 백업 관리 및 복원’에서 삭제 전 복원 지점을 선택하세요. 복원하면 현재 가족 데이터가 교체되므로 백업 시간을 주의해서 확인하세요. 사용 가능한 백업이 없다면 삭제한 데이터를 복원하지 못할 수 있습니다.",
      contactTitle: "지원 문의",
      contactText: "기기 모델, iOS 버전, 앱 버전, 화면에 표시된 오류 및 재현 단계를 포함하여 <a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a>으로 이메일을 보내 주세요. 실명, 비공개 가족 기록 또는 성장 사진은 보내지 마세요."
    }
  },
  en: {
    common: {
      brand: "Growing Together",
      brandMark: "GT",
      homeLabel: "App Pages home",
      back: "← Back to Growing Together",
      languageLabel: "Choose language",
      copyright: "© 2026 Growing Together"
    },
    home: {
      title: "Growing Together · Documentation and Support",
      description: "User guide, privacy policy, terms, and support information for Growing Together.",
      eyebrow: "GROW TOGETHER",
      heading: "Small points.<br>Growth you can see.",
      lead: "Record everyday progress with family tasks, point rewards, long-term goals, and a growth album.",
      viewDocuments: "View documents",
      documentsEyebrow: "DOCUMENTS",
      documentsTitle: "Documents and support",
      guideTitle: "User Guide",
      guideText: "Getting started, main features, and common actions",
      privacyTitle: "Privacy Policy",
      privacyText: "Data storage, iCloud backup, and permission use",
      termsTitle: "Terms of Service",
      termsText: "Usage rules, service boundaries, and liability",
      supportTitle: "Get Support",
      supportText: "FAQs, troubleshooting, and contact information"
    },
    guide: {
      title: "Growing Together User Guide",
      description: "Growing Together user guide.",
      eyebrow: "USER GUIDE",
      heading: "Growing Together User Guide",
      meta: "Version: 1.0 · Updated: August 2, 2026",
      intro: "Growing Together uses tasks, points, rewards, and growth records to make your family's everyday progress visible.",
      startTitle: "1. Getting Started",
      startText: "When you first open the app, enter nicknames for a parent and child, then choose a few common task templates. After onboarding, you can continue to add, edit, or deactivate people under Our Family → Family Members.",
      tasksTitle: "2. Tasks, Completion, and Approval",
      tasksText: "Create one-time or repeating tasks under Tasks, then set participants, points, subtasks, due times, and whether photo evidence is required. A parent or guardian records the child's completion; when approval is enabled, points are granted after confirmation. If a correction is needed, reverse the entry in point history.",
      rewardsTitle: "3. Rewards, Goals, and Growth Records",
      rewardsText: "Create rewards agreed upon by your family under Rewards. After someone requests a reward, a parent can confirm the point deduction and mark it complete once fulfilled. Long-Term Goals work well for daily habits, while the Growth Album records memorable moments with a photo and a short note.",
      settingsTitle: "4. Reminders, App Lock, and iCloud",
      settingsText: "Under Our Family → Settings, you can enable daily and task-time reminders, protect the app with Face ID, Touch ID, or the device passcode, and turn on automatic iCloud backup. Review and manually select restore points in backup management. Check the time before restoring so you do not overwrite current content by mistake.",
      inviteTitle: "5. For Parents and Guardians",
      inviteText: "The App is intended for a parent or guardian to record and manage a child's household tasks, points, and growth records. The current version does not provide family invitations or real-time multi-user sync. Automatic iCloud backup is for restoring data or moving it to a device signed in to the same Apple Account.",
      supportTitle: "6. Get Support",
      supportText: "If you have a problem, first see the <a data-local-link href=\"support.html\">Support page</a>. If you still need help, email <a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a> with your device model, iOS version, app version, and steps to reproduce the problem. Do not attach private family content or growth photos."
    },
    privacy: {
      title: "Growing Together Privacy Policy",
      description: "Growing Together Privacy Policy.",
      eyebrow: "PRIVACY POLICY",
      heading: "Growing Together Privacy Policy",
      meta: "Effective: July 25, 2026 · Updated: August 2, 2026",
      intro: "Growing Together (the “App”) respects the privacy of you and your family. This policy explains how the App handles data.",
      dataTitle: "1. Data Processed by the App",
      dataText: "You may enter family nicknames, avatar identifiers, tasks, points, rewards, goals, announcements, activity records, task-completion notes, growth memories, and similar content. The App reads only photos you explicitly select. It does not require a developer account and contains no advertising, user tracking, or third-party analytics services.",
      storageTitle: "2. Data Use and Storage",
      storageText: "This data is used only to provide features you choose, such as calculating points, showing tasks and growth records, creating local reminders, protecting access to the App, and creating iCloud backups when enabled. Data is stored on your device by default. When automatic iCloud backup is enabled, related data and selected photos are stored in iCloud Drive under your Apple Account, subject to Apple's terms and your iCloud settings.",
      permissionsTitle: "3. System Permissions",
      permissionsText: "The App may request notification permission for daily or task reminders you enable; use Face ID, Touch ID, or device-passcode authentication for App Lock when enabled; and read photos you explicitly select through the system photo picker. iOS performs biometric authentication. The App does not read or store face data, fingerprints, or your device passcode. You can change related features at any time in system or App settings.",
      sharingTitle: "4. Sharing and Third-Party Services",
      sharingText: "The App does not upload family data to the developer's servers or sell it, and it does not provide family invitations or real-time multi-user sharing. iCloud backups are stored under your Apple Account. If you export a backup file and give it to someone else, verify that the recipient is trusted and avoid sharing unnecessary sensitive information.",
      choicesTitle: "5. Your Choices and Data Deletion",
      choicesText: "You can edit or delete family content in the App, turn off automatic iCloud backup, reminders, or App Lock, and delete unneeded iCloud backups in backup management. Deleting the App removes local data from the device. Backups saved in iCloud may still need to be deleted separately through the App or Apple's iCloud management features.",
      childrenTitle: "6. Children's Privacy",
      childrenText: "The App is intended for a parent or guardian to manage a child's household tasks and growth records. It does not provide child accounts or an online service directed to children. A parent or guardian is responsible for creating, managing, and protecting content related to minor family members. The App does not knowingly collect children's personal information for the developer.",
      updatesTitle: "7. Policy Updates",
      updatesText: "We may update this policy when features or data practices change. A new version will be posted on this page with its updated date.",
      contactTitle: "8. Contact Us",
      contactText: "For questions about this policy or data processing, email <a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a>."
    },
    terms: {
      title: "Growing Together Terms of Service",
      description: "Growing Together Terms of Service.",
      eyebrow: "TERMS OF SERVICE",
      heading: "Growing Together Terms of Service",
      meta: "Effective: July 25, 2026 · Updated: August 2, 2026",
      intro: "Welcome to Growing Together (the “App”). By downloading, installing, or using the App, you agree to these terms. If you do not agree, stop using the App.",
      serviceTitle: "1. Service Description",
      serviceText: "The App is intended for parents or guardians and provides management tools for family members, tasks, points, rewards, long-term goals, growth records, local reminders, and iCloud backup. Points, rewards, and agreements within a family are user-created records only. They are not legal tender, electronic money, financial products, or a promise of redemption by the developer.",
      rulesTitle: "2. Usage Rules",
      rulesText: "You are responsible for content you enter, export, and manage, and must have the right to use its text and photos. Do not use the App for unlawful activity or to violate another person's privacy, intellectual-property rights, or other legal rights. A parent or guardian is responsible for managing content related to minor family members and protecting their privacy.",
      servicesTitle: "3. Accounts, Fees, and Third-Party Services",
      servicesText: "The App currently does not require a developer account or offer in-app subscriptions or purchases. iCloud Drive, system notifications, biometric authentication, and the photo picker are provided by Apple and the operating system. Their availability, capacity, and use are also subject to Apple's terms, account status, device settings, and network conditions.",
      dataTitle: "4. Data and Backup Responsibility",
      dataText: "Manage family data and restore operations carefully, and enable and check iCloud backup when needed. Device failure, mistakes, account or network issues, system limits, or third-party service interruptions may delay backups or make them unavailable or unrecoverable. To the extent permitted by applicable law, the developer is not responsible for data that cannot be restored or for fulfillment of agreements among family members.",
      ipTitle: "5. Intellectual Property",
      ipText: "Rights in the App's software, interface, icons, documentation, and related content belong to the developer or their respective owners. You retain the rights you lawfully hold in content you enter. Unless expressly permitted by applicable law, you may not copy, modify, distribute, sell, or reverse engineer the App without permission.",
      disclaimerTitle: "6. Disclaimer and Limitation of Liability",
      disclaimerText: "The App is provided “as is” and “as available,” without a guarantee that it will always be error-free, uninterrupted, or suitable for every family's particular purpose. The App is a family recordkeeping tool and does not provide educational, medical, psychological, legal, or financial advice. To the maximum extent permitted by applicable law, the developer is not liable for indirect, incidental, special, or consequential losses. This section does not exclude liability that cannot legally be excluded.",
      changesTitle: "7. Changes and Termination",
      changesText: "We may update these terms for functional, legal, or operational reasons and will show the updated date on this page. You may stop using and delete the App at any time. We may also modify, suspend, or discontinue some features when necessary.",
      lawTitle: "8. Applicable Law",
      lawText: "These terms are subject to mandatory consumer protections and other applicable laws where you live. The parties should first try to resolve any dispute through good-faith discussion. Unresolved disputes will be handled under applicable law.",
      contactTitle: "9. Contact Us",
      contactText: "For questions about these terms, email <a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a>."
    },
    support: {
      title: "Growing Together Support",
      description: "Growing Together support and frequently asked questions.",
      eyebrow: "SUPPORT",
      heading: "Growing Together Support",
      meta: "Version: 1.0 · Updated: August 2, 2026",
      intro: "Troubleshooting steps for common questions are listed below. For a fuller feature overview, see the <a data-local-link href=\"user-guide.html\">User Guide</a>.",
      notificationsTitle: "Why am I not receiving reminders?",
      notificationsText: "First confirm that reminders are enabled under Our Family → Settings in the App. Then allow notifications under Settings → Notifications → Growing Together on your iPhone or iPad. If a task's reminder time has already passed, edit the task and set a new time.",
      backupTitle: "Why is iCloud backup unavailable?",
      backupText: "Confirm that the device is signed in to an Apple Account, iCloud Drive is enabled, the network is working, and sufficient iCloud storage is available. iCloud features may be limited in the simulator, so testing on a physical device signed in to iCloud is recommended.",
      sharingTitle: "Can I invite family or sync with multiple users in real time?",
      sharingText: "The current version does not provide family invitations, multi-user collaboration, or real-time sync. The App is intended for a parent to manage family data. iCloud creates restore points that you select manually and can restore data on a device signed in to the same Apple Account.",
      lockTitle: "What if I cannot unlock App Lock?",
      lockText: "App Lock uses Face ID, Touch ID, or the device passcode. The App does not store a separate password. Use the device passcode to unlock it. If device authentication is unavailable, restore your passcode or biometric authentication in system settings first.",
      restoreTitle: "How do I restore accidentally deleted data?",
      restoreText: "If automatic iCloud backup was already enabled, go to Our Family → Settings → Manage and Restore Backups, then choose a restore point from before the deletion. Restoring replaces the current family data, so check the backup time carefully. If no backup is available, deleted data may not be recoverable.",
      contactTitle: "Contact Support",
      contactText: "Email <a href=\"mailto:mckejy@gmail.com\">mckejy@gmail.com</a> with your device model, iOS version, App version, any error shown on screen, and steps to reproduce the problem. Do not send real names, private family records, or growth photos."
    }
  }
};

const supportedLanguages = Object.keys(translations);

function readStoredLanguage() {
  try {
    return localStorage.getItem("family-points-language");
  } catch {
    return null;
  }
}

function detectLanguage() {
  const requested = new URLSearchParams(location.search).get("lang");
  if (supportedLanguages.includes(requested)) return requested;

  const stored = readStoredLanguage();
  if (supportedLanguages.includes(stored)) return stored;

  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith("zh")) return "zh";
  if (browserLanguage.startsWith("ja")) return "ja";
  if (browserLanguage.startsWith("ko")) return "ko";
  return "en";
}

function lookup(dictionary, path) {
  return path.split(".").reduce((value, key) => value?.[key], dictionary);
}

function localizeLinks(language) {
  document.querySelectorAll("[data-local-link]").forEach((link) => {
    const url = new URL(link.getAttribute("href"), location.href);
    url.searchParams.set("lang", language);
    link.href = `${url.pathname}${url.search}${url.hash}`;
  });
}

function applyLanguage(language) {
  const dictionary = translations[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = lookup(dictionary, element.dataset.i18n);
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = lookup(dictionary, element.dataset.i18nHtml);
    if (value !== undefined) element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const value = lookup(dictionary, element.dataset.i18nContent);
    if (value !== undefined) element.setAttribute("content", value);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = lookup(dictionary, element.dataset.i18nAriaLabel);
    if (value !== undefined) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-language]").forEach((link) => {
    const active = link.dataset.language === language;
    if (active) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });

  localizeLinks(language);

  try {
    localStorage.setItem("family-points-language", language);
  } catch {
    // The selected language still applies when storage is unavailable.
  }
}

applyLanguage(detectLanguage());
