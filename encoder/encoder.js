const protocol = require("satel-integra-integration-protocol");

function encodeOutputsChangeCommand(msg, encodeFunction) {
  try {
    msg.payload = encodeFunction(msg.prefixAndUserCode, msg.outputs);
  } catch (error) {
    throw msg.topic + " command encoding error: " + error;
  }
}

module.exports = function (RED) {
  function Encoder(config) {
    RED.nodes.createNode(this, config);
    const node = this;
    node.on("input", function (msg, send, done) {
      try {
        if (!msg.topic) {
          throw "message without topic";
        }
     if (msg.topic == "new_data") {
        cmd = new protocol.NewDataCommand();
      } else if (msg.topic == "outputs_state") {
        cmd = new protocol.OutputsStateCommand();
	    } else if (msg.topic == "rtc_and_basic_status_bit") {
        cmd = new protocol.RTCandBasicStatusBitsCommand();
      } else if (msg.topic == "partitions_fire_alarm_memory") {
        cmd = new protocol.PartitionFireAlarmMemoryCommand();
      } else if (msg.topic == "partitions_alarm_memory") {
        cmd = new protocol.PartitionAlarmMemoryCommand();
      } else if (msg.topic == "partitions_fire_alarm") {
        cmd = new protocol.PartitionFireAlarmCommand();
      } else if (msg.topic == "partitions_alarm") {
        cmd = new protocol.PartitionAlarmCommand();
      } else if (msg.topic == "partitions_blocked_for_guard_round") {
        cmd = new protocol.PartitionBlockedForGuardRoundCommand();
      } else if (msg.topic == "partitions_temporary_blocked") {
        cmd = new protocol.PartitionTemporaryBlockedCommand();		
      } else if (msg.topic == "partitions_exit_time_less_10s") {
        cmd = new protocol.PartitionExitTimeLess10sCommand();
      } else if (msg.topic == "partitions_exit_time_more_10s") {
        cmd = new protocol.PartitionExitTimeMore10sCommand();
      } else if (msg.topic == "partitions_entry_time") {
        cmd = new protocol.PartitionEntryTimeCommand();
      } else if (msg.topic == "partitions_with_1st_code_entered") {
        cmd = new protocol.PartitionWith1stCodeEnteredCommand();
      } else if (msg.topic == "partition_armed_in_mode_3") {
        cmd = new protocol.PartitionArmedInMode3Command();
      } else if (msg.topic == "partition_armed_in_mode_2") {
        cmd = new protocol.PartitionArmedInMode2Command();
      } else if (msg.topic == "armed_partition_really") {
        cmd = new protocol.ArmedPartitionReallyCommand();
      } else if (msg.topic == "armed_partition_suppressed") {
        cmd = new protocol.ArmedPartitionSuppressedCommand();
      } else if (msg.topic == "zones_long_violation_trouble") {
        cmd = new protocol.ZonesLongViolationTroubleCommand();
      } else if (msg.topic == "zones_no_violation_trouble") {
        cmd = new protocol.ZonesNoViolationTroubleCommand();
      } else if (msg.topic == "zones_bypass") {
        cmd = new protocol.ZonesBypassCommand();
      } else if (msg.topic == "zones_tamper_alarm_memory") {
        cmd = new protocol.ZonesTamperAlarmMemoryCommand();
      } else if (msg.topic == "zones_alarm_memory") {
        cmd = new protocol.ZonesAlarmMemoryCommand();		
      } else if (msg.topic == "zones_tamper_alarm") {
        cmd = new protocol.ZonesTamperAlarmCommand();
      } else if (msg.topic == "zones_alarm") {
        cmd = new protocol.ZonesAlarmCommand();
      } else if (msg.topic == "zones_tamper") {
        cmd = new protocol.ZonesTamperCommand();
      } else if (msg.topic == "zones_violation") {
        cmd = new protocol.ZonesViolationCommand();	
        } else {
          throw "unsupported message topic: '" + msg.topic + "'";
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
      } catch (error) {
        /* istanbul ignore else: the else path can be reached with old node-red versions only */
        if (done) {
          done(error);
        } else {
          node.error(error, msg);
        }
      }
    });
  }
  RED.nodes.registerType("satel-integra-encoder", Encoder);
};
