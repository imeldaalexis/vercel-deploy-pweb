const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
  {
    _data: {
      id: {
        fromMe: { type: Boolean},
        remote: { type: String},
        id: { type: String},
        _serialized: { type: String}
      },
      viewed: { type: Boolean, default: false },
      body: { type: String, required: true },
      type: { type: String, default: "chat" },
      t: { type: Number, required: true },
      notifyName: { type: String },
      from: { type: String, required: true },
      to: { type: String, required: true },
      ack: { type: Number, default: 1 },
      invis: { type: Boolean, default: false },
      isNewMsg: { type: Boolean, default: true },
      star: { type: Boolean, default: false },
      kicNotified: { type: Boolean, default: false },
      recvFresh: { type: Boolean, default: true },
      isFromTemplate: { type: Boolean, default: false },
      thumbnail: { type: String, default: "" },
      pollInvalidated: { type: Boolean, default: false },
      isSentCagPollCreation: { type: Boolean, default: false },
      latestEditMsgKey: { type: mongoose.Schema.Types.Mixed, default: null },
      latestEditSenderTimestampMs: { type: mongoose.Schema.Types.Mixed, default: null },
      mentionedJidList: { type: [String], default: [] },
      groupMentions: { type: [String], default: [] },
      isEventCanceled: { type: Boolean, default: false },
      eventInvalidated: { type: Boolean, default: false },
      isVcardOverMmsDocument: { type: Boolean, default: false },
      labels: { type: [String], default: [] },
      hasReaction: { type: Boolean, default: false },
      ephemeralDuration: { type: Number, default: 0 },
      ephemeralSettingTimestamp: { type: Number, default: 0 },
      disappearingModeInitiator: { type: String, default: "chat" },
      disappearingModeTrigger: { type: String, default: "chat_settings" },
      viewMode: { type: String, default: "VISIBLE" },
      productHeaderImageRejected: { type: Boolean, default: false },
      lastPlaybackProgress: { type: Number, default: 0 },
      isDynamicReplyButtonsMsg: { type: Boolean, default: false },
      isCarouselCard: { type: Boolean, default: false },
      parentMsgId: { type: mongoose.Schema.Types.Mixed, default: null },
      isMdHistoryMsg: { type: Boolean, default: false },
      stickerSentTs: { type: Number, default: 0 },
      isAvatar: { type: Boolean, default: false },
      lastUpdateFromServerTs: { type: Number, default: 0 },
      invokedBotWid: { type: mongoose.Schema.Types.Mixed, default: null },
      bizBotType: { type: mongoose.Schema.Types.Mixed, default: null },
      botResponseTargetId: { type: mongoose.Schema.Types.Mixed, default: null },
      botPluginType: { type: mongoose.Schema.Types.Mixed, default: null },
      botPluginReferenceIndex: { type: mongoose.Schema.Types.Mixed, default: null },
      botPluginSearchProvider: { type: mongoose.Schema.Types.Mixed, default: null },
      botPluginSearchUrl: { type: mongoose.Schema.Types.Mixed, default: null },
      botPluginSearchQuery: { type: mongoose.Schema.Types.Mixed, default: null },
      botPluginMaybeParent: { type: Boolean, default: false },
      botReelPluginThumbnailCdnUrl: { type: mongoose.Schema.Types.Mixed, default: null },
      botMsgBodyType: { type: mongoose.Schema.Types.Mixed, default: null },
      requiresDirectConnection: { type: mongoose.Schema.Types.Mixed, default: null },
      bizContentPlaceholderType: { type: mongoose.Schema.Types.Mixed, default: null },
      hostedBizEncStateMismatch: { type: Boolean, default: false },
      senderOrRecipientAccountTypeHosted: { type: Boolean, default: false },
      placeholderCreatedWhenAccountIsHosted: { type: Boolean, default: false },
      links: { type: [String], default: [] }
    },
    mediaKey: { type: mongoose.Schema.Types.Mixed, default: null },
    id: {
      fromMe: { type: Boolean, required: true },
      remote: { type: String, required: true },
      id: { type: String, required: true },
      _serialized: { type: String, required: true }
    },
    ack: { type: Number, default: 1 },
    hasMedia: { type: Boolean, default: false },
    body: { type: String, required: true },
    type: { type: String, default: "chat" },
    timestamp: { type: Number, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    author: { type: mongoose.Schema.Types.Mixed, default: null },
    deviceType: { type: String, default: "web" },
    isForwarded: { type: mongoose.Schema.Types.Mixed, default: null },
    forwardingScore: { type: Number, default: 0 },
    isStatus: { type: Boolean, default: false },
    isStarred: { type: Boolean, default: false },
    broadcast: { type: mongoose.Schema.Types.Mixed, default: null },
    fromMe: { type: Boolean, required: true },
    hasQuotedMsg: { type: Boolean, default: false },
    hasReaction: { type: Boolean, default: false },
    duration: { type: mongoose.Schema.Types.Mixed, default: null },
    location: { type: mongoose.Schema.Types.Mixed, default: null },
    vCards: { type: [String], default: [] },
    inviteV4: { type: mongoose.Schema.Types.Mixed, default: null },
    mentionedIds: { type: [String], default: [] },
    groupMentions: { type: [String], default: [] },
    orderId: { type: mongoose.Schema.Types.Mixed, default: null },
    token: { type: mongoose.Schema.Types.Mixed, default: null },
    isGif: { type: Boolean, default: false },
    isEphemeral: { type: mongoose.Schema.Types.Mixed, default: null },
    links: { type: [String], default: [] }
  },
  { id: false }
);

module.exports = mongoose.model('messages', MessageSchema);