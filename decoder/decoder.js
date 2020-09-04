const protocol = require("satel-integra-integration-protocol");

module.exports = function (RED) {
  function Decoder(config) {
    RED.nodes.createNode(this, config);
    const node = this;
    node.on("input", function (msg, send, done) {
      if (!(msg.payload instanceof Buffer)) {
        const err = "message doesn't have a buffer in the 'payload' field";
        /* istanbul ignore else: the else path can be reached with old node-red versions only */
        if (done) {
          done(err);
        } else {
          node.error(err, msg);
        }
        return;
      }
    const decoded_msg = protocol.decodeMessage(msg.payload);
    if (decoded_msg instanceof protocol.NewDataAnswer) {
        msg.topic = "new_data";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.RTCandBasicStatusBitsAnswer) {
        msg.topic = "rtc_and_basic_status_bit";
        msg.payload = decoded_msg.flags;
      } else if (decoded_msg instanceof protocol.OutputsStateAnswer) {
        msg.topic = "outputs_state";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.PartitionFireAlarmMemoryAnswer) {
        msg.topic = "partitions_alarm_memory";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.PartitionAlarmMemoryAnswer) {
        msg.topic = "partitions_alarm_memory";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.PartitionFireAlarmAnswer) {
        msg.topic = "partitions_fire_alarm";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.PartitionAlarmAnswer) {
        msg.topic = "partitions_alarm";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.PartitionBlockedForGuardRoundAnswer) {
        msg.topic = "partitions_blocked_for_guard_round";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.PartitionTemporaryBlockedAnswer) {
        msg.topic = "partitions_temporary_blocked";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.PartitionExitTimeLess10sAnswer) {
        msg.topic = "partitions_exit_time_less_10s";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.PartitionExitTimeMore10sAnswer) {
        msg.topic = "partitions_exit_time_more_10s";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.PartitionEntryTimeAnswer) {
        msg.topic = "partitions_entry_time";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.PartitionWith1stCodeEnteredAnswer) {
        msg.topic = "partitions_with_1st_code_entered";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.PartitionArmedInMode3Answer) {
        msg.topic = "Partitions_armed_in_mode_3";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.PartitionArmedInMode2Answer) {
        msg.topic = "Partitions_armed_in_mode_2";
        msg.payload = decoded_msg.flags;
      } else if (decoded_msg instanceof protocol.ArmedPartitionReallyAnswer) {
        msg.topic = "armed_partitions_really";
        msg.payload = decoded_msg.flags;		
	 } else if (decoded_msg instanceof protocol.ArmedPartitionSuppressedAnswer) {
        msg.topic = "armed_partitions_suppressed";
        msg.payload = decoded_msg.flags;
	 } else if (decoded_msg instanceof protocol.ZonesLongViolationTroubleAnswer) {
        msg.topic = "zones_long_violation_trouble";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.ZonesNoViolationTroubleAnswer) {
        msg.topic = "zones_no_violation_trouble";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.ZonesBypassAnswer) {
        msg.topic = "zones_bypass";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.ZonesTamperAlarmMemoryAnswer) {
        msg.topic = "zones_tamper_alarm_memory";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.ZonesAlarmMemoryAnswer) {
        msg.topic = "zones_alarm_memory";
        msg.payload = decoded_msg.flags;
	  } else if (decoded_msg instanceof protocol.ZonesTamperAlarmAnswer) {
        msg.topic = "zones_tamper_alarm";
        msg.payload = decoded_msg.flags;
      } else if (decoded_msg instanceof protocol.ZonesAlarmAnswerAnswer) {
        msg.topic = "zones_alarm";
        msg.payload = decoded_msg.flags;
      } else if (decoded_msg instanceof protocol.ZonesTamperAnswerAnswer) {
        msg.topic = "zones_tamper";
        msg.payload = decoded_msg.flags;
      } else if (decoded_msg instanceof protocol.ZonesViolationAnswerAnswer) {
        msg.topic = "zones_violation";
        msg.payload = decoded_msg.flags;
      } else {
        const err =
          "message decoding failed, payload: " + msg.payload.toString("hex");
        /* istanbul ignore else: the else path can be reached with old node-red versions only */
        if (done) {
          done(err);
        } else {
          node.error(err, msg);
        }
        return;
      }
      /* istanbul ignore else: the else path can be reached with old node-red versions only */
      if (send) {
        send(msg);
      } else {
        node.send(msg);
      }
      /* istanbul ignore else: the else path can be reached with old node-red versions only */
      if (done) {
        done();
      }
    });
  }
  RED.nodes.registerType("satel-integra-decoder", Decoder);
};
