const protocol = require("satel-integra-integration-protocol");

function encodeOutputsChangeCommand(msg, encodeFunction) {
  try {
    msg.payload = encodeFunction(msg.prefixAndUserCode, msg.outputs);
  } catch (error) {
    throw msg.topic + " command encoding error: " + error;
  }
}

function encodePartitionsChangeCommand(msg, encodeFunction) {
  try {
    msg.payload = encodeFunction(msg.prefixAndUserCode, msg.partitions);
  } catch (error) { 
    throw msg.topic + " command encoding error: " + error;
  }
}

function encodeZonesChangeCommand(msg, encodeFunction) {
  try {
    msg.payload = encodeFunction(msg.prefixAndUserCode, msg.zones);
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
          msg.payload = protocol.encodeNewDataCommand();
        } else if (msg.topic == "outputs_state") {
          msg.payload = protocol.encodeOutputsStateCommand();
		//-----<tpatora>----------
        } else if (msg.topic == "troubles_memory_part8") {
          msg.payload = protocol.encodeTroublesMemoryPart8Command();
        } else if (msg.topic == "troubles_part8") {
          msg.payload = protocol.encodeTroublesPart8Command();
        } else if (msg.topic == "troubles_memory_part7") {
          msg.payload = protocol.encodeTroublesMemoryPart7Command();
        } else if (msg.topic == "troubles_memory_part6") {
          msg.payload = protocol.encodeTroublesMemoryPart6Command();
        } else if (msg.topic == "troubles_part7") {
          msg.payload = protocol.encodeTroublesPart7Command();
        } else if (msg.topic == "troubles_part6") {
          msg.payload = protocol.encodeTroublesPart6Command();
        } else if (msg.topic == "partitions_with_warning_alarms") {
          msg.payload = protocol.encodePartitionsWithWarningAlarmsCommand();
        } else if (msg.topic == "partitions_armed_in_mode1") {
          msg.payload = protocol.encodePartitionsArmedInMode1Command();
        } else if (msg.topic == "zones_masked_memory") {
          msg.payload = protocol.encodeZonesMaskedMemoryCommand();
        } else if (msg.topic == "zones_masked") {
          msg.payload = protocol.encodeZonesMaskedCommand();
        } else if (msg.topic == "partitions_with_verified_alarms") {
          msg.payload = protocol.encodePartitionsWithVerifiedAlarmsCommand();
        } else if (msg.topic == "zones_isolate") {
          msg.payload = protocol.encodeZonesIsolateCommand();
        } else if (msg.topic == "partitions_with_violated_zones") {
          msg.payload = protocol.encodePartitionsWithViolatedZonesCommand();
        } else if (msg.topic == "troubles_memory_part5") {
          msg.payload = protocol.encodeTroublesMemoryPart5Command();
        } else if (msg.topic == "troubles_memory_part4") {
          msg.payload = protocol.encodeTroublesMemoryPart4Command();
        } else if (msg.topic == "troubles_memory_part3") {
          msg.payload = protocol.encodeTroublesMemoryPart3Command();
        } else if (msg.topic == "troubles_memory_part2") {
          msg.payload = protocol.encodeTroublesMemoryPart2Command();
        } else if (msg.topic == "troubles_memory_part1") {
          msg.payload = protocol.encodeTroublesMemoryPart1Command();
        } else if (msg.topic == "troubles_part5") {
          msg.payload = protocol.encodeTroublesPart5Command();
        } else if (msg.topic == "troubles_part4") {
          msg.payload = protocol.encodeTroublesPart4Command();
        } else if (msg.topic == "troubles_part3") {
          msg.payload = protocol.encodeTroublesPart3Command();		  
        } else if (msg.topic == "troubles_part2") {
          msg.payload = protocol.encodeTroublesPart2Command();
        } else if (msg.topic == "troubles_part1") {
          msg.payload = protocol.encodeTroublesPart1Command();
        } else if (msg.topic == "rtc_and_basic_status_bits") {
          msg.payload = protocol.encodeRTCandBasicStatusBitsCommand();
        } else if (msg.topic == "doors_opened_long") {
          msg.payload = protocol.encodeDoorsOpenedLongCommand();
        } else if (msg.topic == "doors_opened") {
          msg.payload = protocol.encodeDoorsOpenedCommand();
        } else if (msg.topic == "partitions_fire_alarm_memory") {
          msg.payload = protocol.encodePartitionsFireAlarmMemoryCommand();
        } else if (msg.topic == "partitions_alarm_memory") {
          msg.payload = protocol.encodePartitionsAlarmMemoryCommand();
        } else if (msg.topic == "partitions_fire_alarm") {
          msg.payload = protocol.encodePartitionsFireAlarmCommand();
        } else if (msg.topic == "partitions_alarm") {
          msg.payload = protocol.encodePartitionsAlarmCommand();
        } else if (msg.topic == "partitions_blocked_for_guard_round") {
          msg.payload = protocol.encodePartitionsBlockedForGuardRoundCommand();
        } else if (msg.topic == "partitions_temporary_blocked") {
          msg.payload = protocol.encodePartitionsTemporaryBlockedCommand();
        } else if (msg.topic == "partitions_exit_time_less_10s") {
          msg.payload = protocol.encodePartitionsExitTimeLess10sCommand();
        } else if (msg.topic == "partitions_exit_time_more_10s") {
          msg.payload = protocol.encodePartitionsExitTimeMore10sCommand();
        } else if (msg.topic == "partitions_entry_time") {
          msg.payload = protocol.encodePartitionsEntryTimeCommand();
        } else if (msg.topic == "partitions_with_1st_code_entered") {
          msg.payload = protocol.encodePartitionsWith1stCodeEnteredCommand();
        } else if (msg.topic == "partitions_armed_in_mode3") {
          msg.payload = protocol.encodePartitionsArmedInMode3Command();
        } else if (msg.topic == "partitions_armed_in_mode2") {
          msg.payload = protocol.encodePartitionsArmedInMode2Command();
        } else if (msg.topic == "armed_partitions_really") {
          msg.payload = protocol.encodeArmedPartitionsReallyCommand();
        } else if (msg.topic == "armed_partitions_suppressed") {
          msg.payload = protocol.encodeArmedPartitionsSuppressedCommand();
        } else if (msg.topic == "zones_long_violation_trouble") {
          msg.payload = protocol.encodeZonesLongViolationTroubleCommand();
        } else if (msg.topic == "zones_no_violation_trouble") {
          msg.payload = protocol.encodeZonesNoViolationTroubleCommand();
        } else if (msg.topic == "zones_bypass") {
          msg.payload = protocol.encodeZonesBypassCommand();
        } else if (msg.topic == "zones_tamper_alarm_memory") {
          msg.payload = protocol.encodeZonesTamperAlarmMemoryCommand();		
        } else if (msg.topic == "zones_alarm_memory") {
          msg.payload = protocol.encodeZonesAlarmMemoryCommand();		
        } else if (msg.topic == "zones_tamper_alarm") {
          msg.payload = protocol.encodeZonesTamperAlarmCommand();
        } else if (msg.topic == "zones_alarm") {
          msg.payload = protocol.encodeZonesAlarmCommand();
        } else if (msg.topic == "arm_in_mode0") {
          encodePartitionsChangeCommand(msg, protocol.encodeArmInMode0Command);
		} else if (msg.topic == "arm_in_mode1") {
          encodePartitionsChangeCommand(msg, protocol.encodeArmInMode1Command);
        } else if (msg.topic == "arm_in_mode2") {
          encodePartitionsChangeCommand(msg, protocol.encodeArmInMode2Command);
        } else if (msg.topic == "arm_in_mode3") {
          encodePartitionsChangeCommand(msg, protocol.encodeArmInMode3Command);
        } else if (msg.topic == "disarm") {
          encodePartitionsChangeCommand(msg, protocol.encodeDisarmCommand);
        } else if (msg.topic == "clear_alarm") {
          encodePartitionsChangeCommand(msg, protocol.encodeClearAlarmCommand);
        } else if (msg.topic == "force_arm_in_mode0") {
          encodePartitionsChangeCommand(msg, protocol.encodeForceArmInMode0Command);
        } else if (msg.topic == "force_arm_in_mode1") {
          encodePartitionsChangeCommand(msg, protocol.encodeForceArmInMode1Command);
        } else if (msg.topic == "force_arm_in_mode2") {
          encodePartitionsChangeCommand(msg, protocol.encodeForceArmInMode2Command);
        } else if (msg.topic == "force_arm_in_mode3") {
          encodePartitionsChangeCommand(msg, protocol.encodeForceArmInMode3Command);
        } else if (msg.topic == "zones_bypass_user") {
          encodeZonesChangeCommand(msg, protocol.encodeZonesBypassUserCommand);
        } else if (msg.topic == "zones_unbypass") {
          encodeZonesChangeCommand(msg, protocol.encodeZonesUnbypassCommand);
        } else if (msg.topic == "open_door") {
          encodeOutputsChangeCommand(msg, protocol.encodeOpenDoorCommand);
        } else if (msg.topic == "zones_isolate") {
		  encodeZonesChangeCommand(msg, protocol.encodeZonesIsolateCommand);
		//-----</tpatora>----------		  
        } else if (msg.topic == "zones_tamper") {
          msg.payload = protocol.encodeZonesTamperCommand();
        } else if (msg.topic == "zones_violation") {
          msg.payload = protocol.encodeZonesViolationCommand();
        } else if (msg.topic == "outputs_off") {
          encodeOutputsChangeCommand(msg, protocol.encodeOutputsOffCommand);
        } else if (msg.topic == "outputs_on") {
          encodeOutputsChangeCommand(msg, protocol.encodeOutputsOnCommand);
        } else if (msg.topic == "outputs_switch") {
          encodeOutputsChangeCommand(msg, protocol.encodeOutputsSwitchCommand);
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
