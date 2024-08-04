import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Promise: { input: any; output: any; }
  Reject: { input: any; output: any; }
  Resolve: { input: any; output: any; }
  Stream: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export enum AccessType {
  App = 'APP',
  Backoffice = 'BACKOFFICE'
}

export type Activity = {
  __typename?: 'Activity';
  /** activityObservation of the Activity */
  activityObservation: Scalars['String']['output'];
  /** Area */
  area?: Maybe<Area>;
  assemblerQuantity: Scalars['Int']['output'];
  /** Activity Assembly type ( UNSCHEDULED / SCHEDULED / EMERGENCY / CANCELED / VISIT) */
  assemblyType?: Maybe<AssemblyType>;
  assistantQuantity: Scalars['Int']['output'];
  auxAssemblerQuantity: Scalars['Int']['output'];
  /** Activity blocked */
  blocked?: Maybe<BlockedEntity>;
  /** Activity clean */
  clean?: Maybe<CleanedEntity>;
  /** Contact of the Applicant */
  contactOfTheApplicant: Scalars['String']['output'];
  contract?: Maybe<Contract>;
  /** User created at */
  createdAt: Scalars['DateTime']['output'];
  /** end date */
  endDate?: Maybe<Scalars['DateTime']['output']>;
  /** end time */
  endTime?: Maybe<Scalars['String']['output']>;
  /** Is temp password */
  equipment?: Maybe<Equipment>;
  executionDate: Scalars['String']['output'];
  /** executionObservation of the Activity */
  executionObservation: Scalars['String']['output'];
  /** Expected Date for Dismount */
  expectedDateDismount?: Maybe<Scalars['String']['output']>;
  /** Activity ID */
  id: Scalars['ID']['output'];
  /** Inspector name */
  inspector?: Maybe<Scalars['String']['output']>;
  /** indicates that the area needs cleaning */
  isClean: Scalars['Boolean']['output'];
  /** Leader assemblers quantity */
  leaderQuantity: Scalars['Int']['output'];
  manager: Scalars['String']['output'];
  /** Name of the Applicant */
  nameOfTheApplicant: Scalars['String']['output'];
  /** Activity obstacle */
  obstacle?: Maybe<ObstacleEntity>;
  /** User e-mail */
  om: Scalars['String']['output'];
  /** Activity PTS */
  pts?: Maybe<PtsEntity>;
  scaffoldingList: Array<ScaffoldingEntity>;
  status: ActivityStatus;
  /** Activity Tag */
  tag?: Maybe<Scalars['String']['output']>;
  /** teamStrengthObservation */
  teamStrengthObservation?: Maybe<Scalars['String']['output']>;
  /** Total effort */
  totalEffort?: Maybe<Scalars['Float']['output']>;
  /** Activity Work type (MOUNT / DISMOUNT) */
  type: ActivityType;
  /** User updated at */
  updatedAt: Scalars['DateTime']['output'];
  /** Visit Name */
  visitName?: Maybe<Scalars['String']['output']>;
  /** Visiting companion */
  visitingCompanion?: Maybe<Scalars['String']['output']>;
};

export type ActivityBlockedInput = {
  /** Activity end date */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Activity Id */
  id: Scalars['String']['input'];
  /** Activity is Blocked */
  isBlocked: Scalars['Boolean']['input'];
  /** Activity is Idleness */
  isIdleness?: InputMaybe<Scalars['Boolean']['input']>;
  /** Activity observation */
  observation?: InputMaybe<Scalars['String']['input']>;
  /** Activity start date */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ActivityCleanInput = {
  /** Activity description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Activity Id */
  id: Scalars['String']['input'];
  /** Activity needs be clean */
  isCleaned: Scalars['Boolean']['input'];
};

export enum ActivityInfoStatus {
  Done = 'DONE',
  Empty = 'EMPTY',
  Warning = 'WARNING'
}

export type ActivityLog = {
  __typename?: 'ActivityLog';
  /** Log created at */
  createdAt: Scalars['DateTime']['output'];
  /** Log ID */
  id: Scalars['ID']['output'];
  /** Log type description */
  logDescription?: Maybe<Scalars['String']['output']>;
  /** Log Type */
  logType: LogType;
};

export enum ActivityStatus {
  Canceled = 'CANCELED',
  Done = 'DONE',
  Impediment = 'IMPEDIMENT',
  InProgress = 'IN_PROGRESS',
  Opened = 'OPENED',
  Released = 'RELEASED'
}

export enum ActivityType {
  Dismount = 'DISMOUNT',
  Mount = 'MOUNT'
}

export type Area = {
  __typename?: 'Area';
  /** Contract on area */
  contract: Contract;
  /** Area created at */
  createdAt: Scalars['DateTime']['output'];
  /** Area ID */
  id: Scalars['ID']['output'];
  /** Area name */
  name: Scalars['String']['output'];
  /** Area updated at */
  updatedAt: Scalars['DateTime']['output'];
};

export enum AssemblyType {
  Canceled = 'CANCELED',
  Emergency = 'EMERGENCY',
  Scheduled = 'SCHEDULED',
  Unscheduled = 'UNSCHEDULED',
  Visit = 'VISIT'
}

export type AssetEntity = {
  __typename?: 'AssetEntity';
  createdAt: Scalars['DateTime']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['String']['output'];
  infosId?: Maybe<Scalars['String']['output']>;
  mimeType: Scalars['String']['output'];
  size?: Maybe<Scalars['Float']['output']>;
  source: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BaseResult = ErrorResult | SuccessResult;

export type BlockInfos = {
  __typename?: 'BlockInfos';
  blockedId?: Maybe<Scalars['String']['output']>;
  confirmationCode?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  infos?: Maybe<InfosInput>;
  infosId?: Maybe<Scalars['String']['output']>;
  request?: Maybe<InfosInput>;
  requestId?: Maybe<Scalars['String']['output']>;
};

export type BlockedEntity = {
  __typename?: 'BlockedEntity';
  /** asset collection of activity */
  assets?: Maybe<Array<Maybe<AssetEntity>>>;
  /** List of infos from blocks of activity if is Blocked */
  block?: Maybe<Array<InfosEntity>>;
  /** Activity Id */
  id: Scalars['String']['output'];
  /** Activity is Blocked */
  isBlocked: Scalars['Boolean']['output'];
  /** isIdleness description */
  isIdleness?: Maybe<Scalars['Boolean']['output']>;
  /** Activity Observation */
  observation?: Maybe<Scalars['String']['output']>;
  obstacle?: Maybe<ObstacleEntity>;
};

export type BlockedInfosInput = {
  /** Information Id */
  blockId?: InputMaybe<Scalars['String']['input']>;
  /** Confirmation code to block */
  confirmationCode?: InputMaybe<Scalars['String']['input']>;
  /** Block informations */
  infos?: InputMaybe<DefaultInfosInput>;
  /** Block request informations */
  request?: InputMaybe<DefaultInfosInput>;
};

export type BlockedResponse = {
  __typename?: 'BlockedResponse';
  block: Array<BlockInfos>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isBlocked: Scalars['Boolean']['output'];
  isIdleness?: Maybe<Scalars['Boolean']['output']>;
  observation?: Maybe<Scalars['String']['output']>;
  obstacleId?: Maybe<Scalars['String']['output']>;
  status: ActivityInfoStatus;
};

export type Book = {
  __typename?: 'Book';
  analyzedBy?: Maybe<Scalars['String']['output']>;
  bookAssets?: Maybe<Array<Maybe<BookAsset>>>;
  clientWork?: Maybe<Scalars['String']['output']>;
  contractNumber?: Maybe<Scalars['String']['output']>;
  designer?: Maybe<Scalars['String']['output']>;
  draftsman?: Maybe<Scalars['String']['output']>;
  guidance?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  projectReference?: Maybe<Scalars['String']['output']>;
  /** Project Type (BOOK OR SPECIFIC) */
  projectType?: Maybe<ProjectType>;
  qrCodeRequester?: Maybe<Scalars['String']['output']>;
  /** Scaffolding type */
  scaffoldingType?: Maybe<ScaffoldingType>;
  status: BookStatus;
  validatedBy?: Maybe<Scalars['String']['output']>;
};

export type BookAsset = {
  __typename?: 'BookAsset';
  asset: AssetEntity;
  id: Scalars['String']['output'];
  type: BookAssetType;
};

export enum BookAssetType {
  ArtContract = 'ART_CONTRACT',
  ArtResponsible = 'ART_RESPONSIBLE',
  Attachment_5 = 'ATTACHMENT_5',
  LabelBack = 'LABEL_BACK',
  LabelFront = 'LABEL_FRONT',
  LineOfLifeCalculateMemory = 'LINE_OF_LIFE_CALCULATE_MEMORY',
  LineOfLifeProject = 'LINE_OF_LIFE_PROJECT',
  ScaffoldingCalculateMemory = 'SCAFFOLDING_CALCULATE_MEMORY',
  ScaffoldingPhoto = 'SCAFFOLDING_PHOTO',
  ScaffoldingProject = 'SCAFFOLDING_PROJECT'
}

export enum BookStatus {
  Pending = 'PENDING',
  Valid = 'VALID'
}

export type CleanActivityInput = {
  activityId: Scalars['String']['input'];
  isClean: Scalars['Boolean']['input'];
  observation?: InputMaybe<Scalars['String']['input']>;
};

export type CleanedEntity = {
  __typename?: 'CleanedEntity';
  /** activityObservation */
  activityObservation?: Maybe<InfosInput>;
  /** executionObservation */
  executionObservation?: Maybe<InfosInput>;
  /** Activity Id */
  id: Scalars['String']['output'];
  /** Activity is Clean */
  isCleaned: Scalars['Boolean']['output'];
  /** status */
  status?: Maybe<InfosInput>;
};

export type CompleteActivityInput = {
  activityId: Scalars['String']['input'];
  scaffolds: Array<ScaffoldInput>;
  teamInfo: TeamInfoInput;
};

export type ConfirmationBlockingData = {
  /** Activity Id */
  activityId: Scalars['String']['input'];
  /** Blocked Info Id */
  blockedInfoId: Scalars['String']['input'];
  confirmationCode: Scalars['String']['input'];
  /** Blocked Id */
  id: Scalars['String']['input'];
  request: DefaultInfo;
};

export type ConfirmationBlockingDto = {
  data: Array<ConfirmationBlockingData>;
};

export type Contract = {
  __typename?: 'Contract';
  /** Contract show name */
  appName: Scalars['String']['output'];
  /** Client Name */
  clientName: Scalars['String']['output'];
  /** Client ID */
  codClient: Scalars['String']['output'];
  /** Contract created at */
  createdAt: Scalars['DateTime']['output'];
  /** Contract finish date */
  finishDate: Scalars['String']['output'];
  /** Contract ID */
  id: Scalars['ID']['output'];
  /** Incumbents Responsible of Contract */
  incumbents: Array<Employee>;
  /** Managers Responsible of Contract */
  managers: Array<Employee>;
  /** Contract number */
  number: Scalars['String']['output'];
  /** Contract start date */
  startDate: Scalars['String']['output'];
  /** Contract totvs name */
  totvsName: Scalars['String']['output'];
  /** Contract updated at */
  updatedAt: Scalars['DateTime']['output'];
};

export type ContractFilteredPaginatedInput = {
  clientName?: InputMaybe<Scalars['String']['input']>;
  contractName?: InputMaybe<Scalars['String']['input']>;
  contractNumber?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateActivityFromProjectInput = {
  bookId: Scalars['ID']['input'];
};

export type CreateActivityInput = {
  /** activityObservation of the Activity */
  activityObservation?: InputMaybe<Scalars['String']['input']>;
  /** Activity Assembly type ( UNSCHEDULED / SCHEDULED / EMERGENCY / CANCELED) */
  activityType: AssemblyType;
  /** Area ID */
  areaId: Scalars['String']['input'];
  /** Activity assemblers quantity */
  assemblerQuantity: Scalars['Int']['input'];
  /** Activity assistants quantity */
  assistantQuantity: Scalars['Int']['input'];
  /** Activity aux assemblers quantity */
  auxAssemblerQuantity: Scalars['Int']['input'];
  /** Contact of the Applicant */
  contactOfTheApplicant: Scalars['String']['input'];
  /** Contract ID */
  contractId: Scalars['String']['input'];
  /** end date */
  endDate?: InputMaybe<Scalars['String']['input']>;
  /** end time */
  endTime?: InputMaybe<Scalars['String']['input']>;
  /** Equipment name */
  equipmentName: Scalars['String']['input'];
  /** Activity Execution Date must be of type ISO 8601 */
  executionDate: Scalars['String']['input'];
  /** Activity executionObservation */
  executionObservation?: InputMaybe<Scalars['String']['input']>;
  /** Activity Id (request by app) */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Inspector name */
  inspector?: InputMaybe<Scalars['String']['input']>;
  /** Leader assemblers quantity */
  leaderQuantity: Scalars['Int']['input'];
  /** Activity Manager */
  manager: Scalars['String']['input'];
  /** Name of the Applicant */
  nameOfTheApplicant: Scalars['String']['input'];
  /** Activity Maintenance Order */
  om: Scalars['String']['input'];
  /** scaffolding's */
  scaffoldingList?: InputMaybe<Array<ScaffoldingInput>>;
  /** Activity Status */
  status?: InputMaybe<ActivityStatus>;
  /** Activity Tag */
  tag?: InputMaybe<Scalars['String']['input']>;
  /** Activity teamStrengthObservation */
  teamStrengthObservation?: InputMaybe<Scalars['String']['input']>;
  /** Activity Work type (MOUNT / DISMOUNT) */
  type: ActivityType;
  /** Visit Name */
  visitName?: InputMaybe<Scalars['String']['input']>;
  /** Visiting companion */
  visitingCompanion?: InputMaybe<Scalars['String']['input']>;
};

export type CreateActivityObstacleInput = {
  /** Activity Id */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Infos if activity has Obstacle */
  infos?: InputMaybe<DefaultInfosInput>;
  /** Activity is Obstacled */
  isObstacled: Scalars['Boolean']['input'];
};

export type CreateAreaInput = {
  /** ContractID */
  contractId: Scalars['String']['input'];
  /** Area name */
  name: Scalars['String']['input'];
};

export type CreateAreaResult = ErrorResult | SuccessResult;

export type CreateContractInput = {
  /** Contract show name */
  appName: Scalars['String']['input'];
  /** Client Name */
  clientName: Scalars['String']['input'];
  /** Client ID */
  codClient: Scalars['String']['input'];
  /** Contract external ID */
  externalId: Scalars['String']['input'];
  /** Contract finish date */
  finishDate: Scalars['DateTime']['input'];
  /** ID (guid) Incumbent Collection */
  incumbentIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** ID (guid) Manager Collection */
  managerIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Contract number */
  number: Scalars['String']['input'];
  /** Contract start date */
  startDate: Scalars['DateTime']['input'];
  /** Contract totvs name */
  totvsName: Scalars['String']['input'];
};

export type CreateContractResult = ErrorResult | SuccessResult;

export type CreateMetaDto = {
  /** Date of last update */
  lastUpdate: Scalars['DateTime']['input'];
  /** Month/Year of the target */
  monthYear: Scalars['String']['input'];
  /** Name of the foreman */
  name: Scalars['String']['input'];
  /** Date of registration */
  registerDate: Scalars['DateTime']['input'];
  /** Target Value as string */
  targetValue: Scalars['String']['input'];
};

export type CreateParameterDto = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type CreatePermissionInput = {
  code: PermissionCode;
  name: Scalars['String']['input'];
};

export type CreateResponsablesActivityInput = {
  activityId: Scalars['String']['input'];
  responsibles: Responsible;
};

export type CreateRoleInput = {
  /** Role access app */
  allowApp: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  /** Collection of UUIDs */
  permissionsBackofficeIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateRoleResult = ErrorResult | RoleEntity | ValidationError;

export type CreateScaffoldingInput = {
  activityId: Scalars['String']['input'];
  bookId?: InputMaybe<Scalars['String']['input']>;
  /** Scaffolding floor quantity */
  floor?: InputMaybe<Scalars['Int']['input']>;
  /** Scaffolding floor length size */
  floorLength?: InputMaybe<Scalars['Float']['input']>;
  /** Scaffolding floor width size */
  floorWidth?: InputMaybe<Scalars['Float']['input']>;
  /** Scaffolding height */
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Scaffolding length */
  length?: InputMaybe<Scalars['Float']['input']>;
  /** Scaffolding life line */
  lifeLine?: InputMaybe<Scalars['Boolean']['input']>;
  /** Scaffolding life line length */
  lifeLineLength?: InputMaybe<Scalars['Float']['input']>;
  projectType: ProjectType;
  /** Scaffolding tag */
  tag?: InputMaybe<Scalars['String']['input']>;
  /** Scaffolding type */
  type?: InputMaybe<ScaffoldingType>;
  /** Scaffolding width */
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateUserInput = {
  /** User contracts */
  contractIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** User e-mail */
  email: Scalars['String']['input'];
  /** User name */
  name: Scalars['String']['input'];
  /** User password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** User password confirmation */
  passwordConfirmation?: InputMaybe<Scalars['String']['input']>;
  /** role ID */
  roleId?: InputMaybe<Scalars['String']['input']>;
};

export type CustomFileUpload = {
  createReadStream?: InputMaybe<Scalars['Stream']['input']>;
  /** Asset encoding */
  encoding?: InputMaybe<Scalars['String']['input']>;
  /** Asset filename */
  filename?: InputMaybe<Scalars['String']['input']>;
  /** Asset type */
  mimetype?: InputMaybe<Scalars['String']['input']>;
};

export type CustomOrderFilter = {
  createdAt?: InputMaybe<OrderByEnum>;
  executionDate?: InputMaybe<OrderByEnum>;
  updatedAt?: InputMaybe<OrderByEnum>;
};

export type CustomUpload = {
  file?: InputMaybe<CustomFileUpload>;
  promise?: InputMaybe<Scalars['Promise']['input']>;
  reject?: InputMaybe<Scalars['Reject']['input']>;
  resolve?: InputMaybe<Scalars['Resolve']['input']>;
};

export type DefaultInfo = {
  date: Scalars['String']['input'];
  time: Scalars['String']['input'];
};

export type DefaultInfosInput = {
  /** Activity date */
  date?: InputMaybe<Scalars['String']['input']>;
  /** PTS Description */
  description?: InputMaybe<Scalars['String']['input']>;
};

export type DefaultResult = {
  __typename?: 'DefaultResult';
  /** Success message */
  message: Scalars['String']['output'];
  /** Success result */
  success: Scalars['Boolean']['output'];
};

export type DeleteResourceResult = DefaultResult | NotFoundError;

export type Employee = {
  __typename?: 'Employee';
  /** Employee Function */
  function?: Maybe<EmployeeFunction>;
  /** Employee ID */
  id: Scalars['ID']['output'];
  /** Employee Name */
  name: Scalars['String']['output'];
  /** Employee Name */
  status: Scalars['String']['output'];
};

export type EmployeeFunction = {
  __typename?: 'EmployeeFunction';
  /** Employee Function ID */
  id: Scalars['ID']['output'];
  /** Employee Function Section */
  section: Scalars['String']['output'];
  /** Employee Function Name */
  title: Scalars['String']['output'];
};

export type Equipment = {
  __typename?: 'Equipment';
  /** Equipament area */
  area: Area;
  /** Equipament contract */
  contract: Contract;
  /** Equipment created at */
  createdAt: Scalars['DateTime']['output'];
  /** Equipament ID */
  id: Scalars['ID']['output'];
  /** Equipament name */
  name: Scalars['String']['output'];
  /** Equipment updated at */
  updatedAt: Scalars['DateTime']['output'];
};

export type ErrorResult = {
  __typename?: 'ErrorResult';
  /** Success message */
  message: Scalars['String']['output'];
  /** Success result */
  success: Scalars['Boolean']['output'];
};

export type FilterInput = {
  orderBy?: InputMaybe<OrderByFilterInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type FilteredPaginatedInput = {
  contractId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  roleId?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  userType?: InputMaybe<Scalars['String']['input']>;
};

export type FindAllBooksInput = {
  designer?: InputMaybe<StringFilterInput>;
  draftsman?: InputMaybe<StringFilterInput>;
  /** Order by field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Order direction */
  orderDirection?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  projectReference?: InputMaybe<StringFilterInput>;
  projectType?: InputMaybe<Scalars['String']['input']>;
  scaffoldingType?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type FindMetaDto = {
  /** Month/Year of the target */
  monthYear?: InputMaybe<Scalars['String']['input']>;
  /** Name of the foreman */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Target Value as string */
  targetValue?: InputMaybe<Scalars['String']['input']>;
};

export type GetActivityInput = {
  /** OM filter */
  OM?: InputMaybe<StringFilterInput>;
  /** area filter */
  area?: InputMaybe<StringFilterInput>;
  /** Activity type */
  assemblyType?: InputMaybe<StringFilterInput>;
  /** book filter */
  book?: InputMaybe<StringFilterInput>;
  /** bookId filter */
  bookId?: InputMaybe<Scalars['String']['input']>;
  /** Date filter */
  date?: InputMaybe<StringFilterInput>;
  /** Activity Status to ignore */
  ignoreStatus?: InputMaybe<Array<ActivityStatus>>;
  orderBy?: InputMaybe<CustomOrderFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  /** search term to get the records */
  search?: InputMaybe<StringFilterInput>;
  size?: InputMaybe<Scalars['Int']['input']>;
  /** Activity Status to ignore */
  status?: InputMaybe<StringFilterInput>;
  /** Tag filter */
  tag?: InputMaybe<StringFilterInput>;
  /** Activity type to ignore */
  type?: InputMaybe<StringFilterInput>;
};

export type GetAreaInput = {
  /** Contract on area filter role */
  contractId?: InputMaybe<Scalars['String']['input']>;
  /** name of the area to filter */
  name?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type GetEmployeeFunctonisInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type GetEmployeesInput = {
  /** Employee functions */
  employeeFunctions?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Employee Name */
  name: Scalars['String']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type GetEquipamentInput = {
  /** Area on equipment filter role */
  areaId?: InputMaybe<StringFilterInput>;
  /** Contract on equipment filter role */
  contractId?: InputMaybe<StringFilterInput>;
  /** Equipament name filter role */
  name?: InputMaybe<StringFilterInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type GetOmInfoEntity = {
  __typename?: 'GetOMInfoEntity';
  /** OM Info */
  omInfo: Activity;
  /** QR Code */
  qrCode: Scalars['String']['output'];
};

export type GraphQlErrorResult = {
  __typename?: 'GraphQLErrorResult';
  code?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type InfosEntity = {
  __typename?: 'InfosEntity';
  /** Confirmation code to block */
  confirmationCode?: Maybe<Scalars['String']['output']>;
  /** Block Id */
  id?: Maybe<Scalars['String']['output']>;
  /** Block request information */
  infos?: Maybe<InfosInput>;
  /** Block request information */
  request?: Maybe<InfosInput>;
};

export type InfosInput = {
  __typename?: 'InfosInput';
  /** PTS activityObservation */
  activityObservation?: Maybe<Scalars['String']['output']>;
  /** Activity date */
  date?: Maybe<Scalars['String']['output']>;
  /** Activity date */
  endDate?: Maybe<Scalars['String']['output']>;
  /** executionObservation */
  executionObservation?: Maybe<Scalars['String']['output']>;
  /** Information Id */
  id?: Maybe<Scalars['String']['output']>;
  /** Activity date */
  startDate?: Maybe<Scalars['String']['output']>;
};

export enum LogType {
  BlockedAdded = 'BLOCKED_ADDED',
  BlockedRemoved = 'BLOCKED_REMOVED',
  Created = 'CREATED',
  ObstacleAdded = 'OBSTACLE_ADDED',
  ObstacleRemoved = 'OBSTACLE_REMOVED',
  PtsAdded = 'PTS_ADDED',
  PtsRemoved = 'PTS_REMOVED',
  Started = 'STARTED'
}

export type LoginInput = {
  /** User e-mail */
  email: Scalars['String']['input'];
  /** User password */
  password: Scalars['String']['input'];
};

export type LoginSuccess = {
  __typename?: 'LoginSuccess';
  /** Login Access Token */
  accessToken?: Maybe<Scalars['String']['output']>;
  /** User temp password */
  isTempPassword?: Maybe<Scalars['Boolean']['output']>;
  /** Login success message */
  message: Scalars['String']['output'];
  /** Grouped Permissions */
  permissions?: Maybe<PermissionsGroupedByAccessType>;
  /** Login Refresh Token */
  refreshToken?: Maybe<Scalars['String']['output']>;
};

export type MailResult = ErrorResult | SuccessResult;

export type MessageResult = ErrorResult | SuccessResult;

export type MetaEntity = {
  __typename?: 'MetaEntity';
  /** Meta ID */
  id: Scalars['String']['output'];
  /** Date of last update */
  lastUpdate: Scalars['DateTime']['output'];
  /** Month/Year of the target */
  monthYear: Scalars['String']['output'];
  /** Name of the foreman */
  name: Scalars['String']['output'];
  /** Date of registration */
  registerDate: Scalars['DateTime']['output'];
  /** Target Value as string */
  targetValue: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addContractsOnUser: SuccessResult;
  cancelActivity: Activity;
  clean: Activity;
  completeActivity: Activity;
  confirmationBlocking: Array<BlockedResponse>;
  createActivity: Activity;
  createActivityBlocked: Activity;
  createActivityClean: Activity;
  createActivityFromProject: Activity;
  createActivityInterruption: Activity;
  createActivityObstacle: Activity;
  createActivityPts: Activity;
  createActivityResponsables: Activity;
  createActivityRestart: Activity;
  createArea: CreateAreaResult;
  createAssetOnBlocked: MessageResult;
  createAssetOnBook: MessageResult;
  createAssetOnObstacle: MessageResult;
  createAssetOnPts: MessageResult;
  createAssetOnScaffolding: MessageResult;
  createContract: CreateContractResult;
  createMeta: MetaEntity;
  createParameter: Parameter;
  createPermission: PermissionResult;
  createRole: CreateRoleResult;
  createScaffolding: ScaffoldingEntity;
  createUser: SuccessResult;
  deleteAssetOnBook: MessageResult;
  deleteBook: MessageResult;
  deleteMeta: MetaEntity;
  deletePermission: DeleteResourceResult;
  deleteRole: DeleteResourceResult;
  loginApp: LoginSuccess;
  loginBackoffice: LoginSuccess;
  recoverPasswordByEmail: RecoveryPasswordResult;
  refreshToken: LoginSuccess;
  removeActivity: Activity;
  removeArea: Area;
  removeEquipment: Equipment;
  removeParameter: Parameter;
  removeUser: User;
  requestBlocking: Array<BlockedResponse>;
  sendCodeByEmail: RecoveryPasswordResult;
  updateAccessType: RoleEntity;
  updateActivity: Activity;
  updateActivityStatus: Activity;
  updateArea: MessageResult;
  updateBlocks: Activity;
  updateContract: CreateContractResult;
  updateMeta: MetaEntity;
  updateObstacle: Activity;
  updateParameter: Parameter;
  updatePermission: PermissionResult;
  updatePts: Activity;
  updateRoleName: CreateRoleResult;
  updateRolePermissions: CreateRoleResult;
  updateScaffoldingStatus: MessageResult;
  updateUser: User;
  updateUserPassword: SuccessResult;
  uploadActivityFiles: BaseResult;
  upsertBook: UpsertBookResponse;
};


export type MutationAddContractsOnUserArgs = {
  id: Scalars['String']['input'];
  input: UpdateUserContractsInput;
};


export type MutationCancelActivityArgs = {
  assemblerQuantity: Scalars['Float']['input'];
  assistantQuantity: Scalars['Float']['input'];
  auxAssemblerQuantity: Scalars['Float']['input'];
  comment: Scalars['String']['input'];
  estimate: Scalars['String']['input'];
  id: Scalars['String']['input'];
  leaderQuantity: Scalars['Float']['input'];
  requester: Scalars['String']['input'];
};


export type MutationCleanArgs = {
  input: CleanActivityInput;
};


export type MutationCompleteActivityArgs = {
  input: CompleteActivityInput;
};


export type MutationConfirmationBlockingArgs = {
  confirmationBlockingsDto: ConfirmationBlockingDto;
};


export type MutationCreateActivityArgs = {
  input: CreateActivityInput;
};


export type MutationCreateActivityBlockedArgs = {
  input: ActivityBlockedInput;
};


export type MutationCreateActivityCleanArgs = {
  input: ActivityCleanInput;
};


export type MutationCreateActivityFromProjectArgs = {
  input: CreateActivityFromProjectInput;
};


export type MutationCreateActivityInterruptionArgs = {
  input: RegisterDateInput;
};


export type MutationCreateActivityObstacleArgs = {
  input: CreateActivityObstacleInput;
};


export type MutationCreateActivityPtsArgs = {
  input: UpdateActivityPtsInput;
};


export type MutationCreateActivityResponsablesArgs = {
  input: CreateResponsablesActivityInput;
};


export type MutationCreateActivityRestartArgs = {
  input: RegisterDateInput;
};


export type MutationCreateAreaArgs = {
  input: CreateAreaInput;
};


export type MutationCreateAssetOnBlockedArgs = {
  blockedId: Scalars['String']['input'];
  file: Scalars['Upload']['input'];
};


export type MutationCreateAssetOnBookArgs = {
  bookId: Scalars['String']['input'];
  file: Scalars['Upload']['input'];
  type: BookAssetType;
};


export type MutationCreateAssetOnObstacleArgs = {
  file: Scalars['Upload']['input'];
  obstacleId: Scalars['String']['input'];
};


export type MutationCreateAssetOnPtsArgs = {
  file: Scalars['Upload']['input'];
  ptsId: Scalars['String']['input'];
};


export type MutationCreateAssetOnScaffoldingArgs = {
  file: Scalars['Upload']['input'];
  scaffoldingId: Scalars['String']['input'];
};


export type MutationCreateContractArgs = {
  input: CreateContractInput;
};


export type MutationCreateMetaArgs = {
  data: CreateMetaDto;
};


export type MutationCreateParameterArgs = {
  createParameterInput: CreateParameterDto;
};


export type MutationCreatePermissionArgs = {
  input: CreatePermissionInput;
};


export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


export type MutationCreateScaffoldingArgs = {
  input: CreateScaffoldingInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDeleteAssetOnBookArgs = {
  assetId: Scalars['String']['input'];
};


export type MutationDeleteBookArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMetaArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePermissionArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginAppArgs = {
  input: LoginInput;
};


export type MutationLoginBackofficeArgs = {
  input: LoginInput;
};


export type MutationRecoverPasswordByEmailArgs = {
  input: RecoverPasswordByEmailInput;
};


export type MutationRefreshTokenArgs = {
  input: RefreshInput;
};


export type MutationRemoveActivityArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveAreaArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveEquipmentArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveParameterArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationRequestBlockingArgs = {
  requestBlocking: RequestBlockingDto;
};


export type MutationSendCodeByEmailArgs = {
  input: SendRecoverPasswordByEmailInput;
};


export type MutationUpdateAccessTypeArgs = {
  updateUserInput: UpdateAccessTypeInput;
};


export type MutationUpdateActivityArgs = {
  id: Scalars['String']['input'];
  input: UpdateActivityInput;
};


export type MutationUpdateActivityStatusArgs = {
  input: UpdateActivityStatusInput;
};


export type MutationUpdateAreaArgs = {
  input: UpdateAreaInput;
};


export type MutationUpdateBlocksArgs = {
  input: UpdateBlocksInput;
};


export type MutationUpdateContractArgs = {
  input: UpdateContractInput;
};


export type MutationUpdateMetaArgs = {
  data: UpdateMetaDto;
  id: Scalars['String']['input'];
};


export type MutationUpdateObstacleArgs = {
  input: UpdateObstacleInput;
};


export type MutationUpdateParameterArgs = {
  id: Scalars['String']['input'];
  updateParameterInput: UpdateParameterDto;
};


export type MutationUpdatePermissionArgs = {
  input: UpdatePermissionInput;
};


export type MutationUpdatePtsArgs = {
  input: UpdatePtsInput;
};


export type MutationUpdateRoleNameArgs = {
  id: Scalars['String']['input'];
  input: Scalars['String']['input'];
};


export type MutationUpdateRolePermissionsArgs = {
  input: UpdateRolePermissionsInput;
};


export type MutationUpdateScaffoldingStatusArgs = {
  data: UpdateStatusDto;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateUserPasswordArgs = {
  id: Scalars['String']['input'];
  input: UpdatePasswordUserInput;
};


export type MutationUploadActivityFilesArgs = {
  input: UploadActivityFilesInput;
};


export type MutationUpsertBookArgs = {
  upsertBookInput: UpsertBookInput;
};

export type NotFoundError = {
  __typename?: 'NotFoundError';
  /** Not found message */
  message: Scalars['String']['output'];
  /** Not found resource ID */
  resourceId: Scalars['String']['output'];
};

export type ObstacleEntity = {
  __typename?: 'ObstacleEntity';
  /** Obstacle Id */
  id: Scalars['String']['output'];
  /** Infos if activity has Obstacle */
  infos?: Maybe<InfosInput>;
  /** Activity is Obstacle */
  isObstacled?: Maybe<Scalars['Boolean']['output']>;
  /** Infos if activity obstacle are solved */
  resolvedInfos?: Maybe<InfosInput>;
  /** Obstacle teamStrengthObservation */
  teamStrengthObservation?: Maybe<Scalars['String']['output']>;
};

export enum OrderByEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderByFilter = {
  __typename?: 'OrderByFilter';
  createdAt?: Maybe<OrderByEnum>;
  updatedAt?: Maybe<OrderByEnum>;
};

export type OrderByFilterInput = {
  createdAt?: InputMaybe<OrderByEnum>;
  updatedAt?: InputMaybe<OrderByEnum>;
};

export type PaginatedActivity = {
  __typename?: 'PaginatedActivity';
  items: Array<Activity>;
  totalItems: Scalars['Int']['output'];
};

export type PaginatedArea = {
  __typename?: 'PaginatedArea';
  items: Array<Area>;
  totalItems: Scalars['Int']['output'];
};

export type PaginatedAsset = {
  __typename?: 'PaginatedAsset';
  items: Array<AssetEntity>;
  totalItems: Scalars['Int']['output'];
};

export type PaginatedBooks = {
  __typename?: 'PaginatedBooks';
  items: Array<Book>;
  totalItems: Scalars['Int']['output'];
};

export type PaginatedContract = {
  __typename?: 'PaginatedContract';
  items: Array<Contract>;
  totalItems: Scalars['Int']['output'];
};

export type PaginatedEmpolyee = {
  __typename?: 'PaginatedEmpolyee';
  items: Array<Employee>;
  totalItems: Scalars['Int']['output'];
};

export type PaginatedEmpolyeeFunction = {
  __typename?: 'PaginatedEmpolyeeFunction';
  items: Array<EmployeeFunction>;
  totalItems: Scalars['Int']['output'];
};

export type PaginatedEquipment = {
  __typename?: 'PaginatedEquipment';
  items: Array<Equipment>;
  totalItems: Scalars['Int']['output'];
};

export type PaginatedInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type PaginatedPermission = {
  __typename?: 'PaginatedPermission';
  items: Array<PermissionEntity>;
  totalItems: Scalars['Int']['output'];
};

export type PaginatedRole = {
  __typename?: 'PaginatedRole';
  items: Array<RoleEntity>;
  totalItems: Scalars['Int']['output'];
};

export type PaginatedUser = {
  __typename?: 'PaginatedUser';
  items: Array<User>;
  totalItems: Scalars['Int']['output'];
};

export type Parameter = {
  __typename?: 'Parameter';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  key: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value: Scalars['String']['output'];
};

export enum PermissionCode {
  AllowApp = 'ALLOW_APP',
  CreateActivities = 'CREATE_ACTIVITIES',
  CreateAreas = 'CREATE_AREAS',
  CreateContracts = 'CREATE_CONTRACTS',
  CreateEquipments = 'CREATE_EQUIPMENTS',
  CreatePermission = 'CREATE_PERMISSION',
  CreateProject = 'CREATE_PROJECT',
  CreateRole = 'CREATE_ROLE',
  CreateSuperadmin = 'CREATE_SUPERADMIN',
  CreateUsers = 'CREATE_USERS',
  DeleteActivities = 'DELETE_ACTIVITIES',
  DeleteAreas = 'DELETE_AREAS',
  DeleteContracts = 'DELETE_CONTRACTS',
  DeleteEquipments = 'DELETE_EQUIPMENTS',
  DeletePermission = 'DELETE_PERMISSION',
  DeleteProject = 'DELETE_PROJECT',
  DeleteRole = 'DELETE_ROLE',
  DeleteSuperadmin = 'DELETE_SUPERADMIN',
  DeleteUsers = 'DELETE_USERS',
  ManageActivities = 'MANAGE_ACTIVITIES',
  ManageAreas = 'MANAGE_AREAS',
  ManageContracts = 'MANAGE_CONTRACTS',
  ManageEquipments = 'MANAGE_EQUIPMENTS',
  ManagePermission = 'MANAGE_PERMISSION',
  ManageProject = 'MANAGE_PROJECT',
  ManageRole = 'MANAGE_ROLE',
  ManageSuperadmin = 'MANAGE_SUPERADMIN',
  ManageUsers = 'MANAGE_USERS',
  ReadActivities = 'READ_ACTIVITIES',
  ReadAreas = 'READ_AREAS',
  ReadContracts = 'READ_CONTRACTS',
  ReadEquipments = 'READ_EQUIPMENTS',
  ReadPermission = 'READ_PERMISSION',
  ReadProject = 'READ_PROJECT',
  ReadRole = 'READ_ROLE',
  ReadSuperadmin = 'READ_SUPERADMIN',
  ReadUsers = 'READ_USERS',
  Superadmin = 'SUPERADMIN',
  UpdateActivities = 'UPDATE_ACTIVITIES',
  UpdateAreas = 'UPDATE_AREAS',
  UpdateContracts = 'UPDATE_CONTRACTS',
  UpdateEquipments = 'UPDATE_EQUIPMENTS',
  UpdatePermission = 'UPDATE_PERMISSION',
  UpdateProject = 'UPDATE_PROJECT',
  UpdateRole = 'UPDATE_ROLE',
  UpdateSuperadmin = 'UPDATE_SUPERADMIN',
  UpdateUsers = 'UPDATE_USERS'
}

export type PermissionEntity = {
  __typename?: 'PermissionEntity';
  /** Role access type */
  accessTypes?: Maybe<Array<AccessType>>;
  /** Role code to identify */
  code: Scalars['String']['output'];
  /** Role created date */
  createdAt: Scalars['DateTime']['output'];
  /** Role description */
  description?: Maybe<Scalars['String']['output']>;
  /** Role ID as uuid xxxx-xxxxx-xxxxx-xxxx */
  id: Scalars['String']['output'];
  /** Role name */
  name: Scalars['String']['output'];
  /** Role updated date */
  updatedAt: Scalars['DateTime']['output'];
};

export type PermissionGrouped = {
  __typename?: 'PermissionGrouped';
  /** group name */
  group: Scalars['String']['output'];
  /** group name */
  items: Array<PermissionGroupedItem>;
};

export type PermissionGroupedItem = {
  __typename?: 'PermissionGroupedItem';
  /** Action name */
  action: Scalars['String']['output'];
  /** Role code to identify */
  code: Scalars['String']['output'];
  /** Role description */
  description?: Maybe<Scalars['String']['output']>;
  /** Permission ID */
  id: Scalars['String']['output'];
  /** Role name */
  name: Scalars['String']['output'];
};

export type PermissionResult = ErrorResult | PermissionEntity | ValidationError;

export type PermissionsGroupedByAccessType = {
  __typename?: 'PermissionsGroupedByAccessType';
  /** APP Permissions */
  APP?: Maybe<Array<PermissionEntity>>;
  /** BACKOFFICE Permissions */
  BACKOFFICE?: Maybe<Array<PermissionEntity>>;
};

export enum ProjectType {
  Book = 'BOOK',
  Specific = 'SPECIFIC'
}

export type PtsEntity = {
  __typename?: 'PtsEntity';
  /** asset collection of activity */
  assets?: Maybe<Array<Maybe<AssetEntity>>>;
  /** Activity has pts */
  hasPts: Scalars['Boolean']['output'];
  /** Activity Id */
  id: Scalars['String']['output'];
  /** Infos if activity has Obstacle */
  obstacle?: Maybe<ObstacleEntity>;
  /** pts information */
  pts?: Maybe<PtsInfosEntity>;
};

export type PtsInfosEntity = {
  __typename?: 'PtsInfosEntity';
  assemblerQuantity: Scalars['Int']['output'];
  assistantQuantity: Scalars['Int']['output'];
  auxAssemblerQuantity: Scalars['Int']['output'];
  /** Confirmation code to block */
  confirmationCode?: Maybe<Scalars['String']['output']>;
  /** Block Id */
  id?: Maybe<Scalars['String']['output']>;
  /** Pts information */
  infos?: Maybe<InfosInput>;
  leaderQuantity: Scalars['Int']['output'];
  /** Pts resolved information */
  resolvedInfos?: Maybe<InfosInput>;
  teamStrengthObservation?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  activeUser: User;
  activities: PaginatedActivity;
  activity: Activity;
  activityByOM: Activity;
  activityLogs: Array<ActivityLog>;
  area: Area;
  areas: PaginatedArea;
  asset: AssetEntity;
  assets: PaginatedAsset;
  contract: Contract;
  contracts: PaginatedContract;
  employee: Employee;
  employeeFunctions: PaginatedEmpolyeeFunction;
  employees: PaginatedEmpolyee;
  /** Get all active employees with function of Incumbent */
  employeesWithFunctionOfIncumbent: PaginatedEmpolyee;
  /** Get all active employees with function of Manager */
  employeesWithFunctionOfManager: PaginatedEmpolyee;
  equipment: Equipment;
  equipments: PaginatedEquipment;
  findAll: Array<MetaEntity>;
  findAllBooks: PaginatedBooks;
  findOne: MetaEntity;
  findOneBook: Book;
  findOneScaffolding: ScaffoldingEntity;
  getOMQRCode: GetOmInfoEntity;
  loadContractsTotvsApi: BaseResult;
  loadEmployeesTotvsApi: BaseResult;
  loadTotvsApi: BaseResult;
  parameter: Parameter;
  parameters: Array<Parameter>;
  permission: PermissionEntity;
  permissions: PaginatedPermission;
  permissionsGrouped: Array<PermissionGrouped>;
  role: RoleEntity;
  roles: PaginatedRole;
  user: User;
  users: PaginatedUser;
  validateEmailCode: MailResult;
};


export type QueryActivitiesArgs = {
  filters?: InputMaybe<GetActivityInput>;
};


export type QueryActivityArgs = {
  id: Scalars['String']['input'];
};


export type QueryActivityByOmArgs = {
  om: Scalars['String']['input'];
};


export type QueryActivityLogsArgs = {
  id: Scalars['String']['input'];
};


export type QueryAreaArgs = {
  id: Scalars['String']['input'];
};


export type QueryAreasArgs = {
  filters?: InputMaybe<GetAreaInput>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
};


export type QueryAssetsArgs = {
  filters?: InputMaybe<PaginatedInput>;
};


export type QueryContractArgs = {
  id: Scalars['String']['input'];
};


export type QueryContractsArgs = {
  filters?: InputMaybe<ContractFilteredPaginatedInput>;
};


export type QueryEmployeeArgs = {
  id: Scalars['String']['input'];
};


export type QueryEmployeeFunctionsArgs = {
  filters?: InputMaybe<GetEmployeeFunctonisInput>;
};


export type QueryEmployeesArgs = {
  filters?: InputMaybe<GetEmployeesInput>;
};


export type QueryEmployeesWithFunctionOfIncumbentArgs = {
  contractId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilterInput>;
};


export type QueryEmployeesWithFunctionOfManagerArgs = {
  contractId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilterInput>;
};


export type QueryEquipmentArgs = {
  id: Scalars['String']['input'];
};


export type QueryEquipmentsArgs = {
  filters?: InputMaybe<GetEquipamentInput>;
};


export type QueryFindAllArgs = {
  filters: FindMetaDto;
};


export type QueryFindAllBooksArgs = {
  filters?: InputMaybe<FindAllBooksInput>;
};


export type QueryFindOneArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindOneBookArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindOneScaffoldingArgs = {
  scaffoldingId: Scalars['String']['input'];
};


export type QueryGetOmqrCodeArgs = {
  omId: Scalars['String']['input'];
  scaffoldId: Scalars['String']['input'];
};


export type QueryParameterArgs = {
  id: Scalars['String']['input'];
};


export type QueryPermissionArgs = {
  id: Scalars['String']['input'];
};


export type QueryPermissionsArgs = {
  filters: FilterInput;
};


export type QueryRoleArgs = {
  id: Scalars['String']['input'];
};


export type QueryRolesArgs = {
  filters?: InputMaybe<RoleFilters>;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  filters?: InputMaybe<FilteredPaginatedInput>;
};


export type QueryValidateEmailCodeArgs = {
  input: ValidateEmailCodeInput;
};

export type RecoverPasswordByEmailInput = {
  /** Code generated on "sendCodeByEmail" mutation */
  code: Scalars['String']['input'];
  /** Email from user to recovery */
  email: Scalars['String']['input'];
  /** New User Password */
  password: Scalars['String']['input'];
};

export type RecoveryPasswordResult = {
  __typename?: 'RecoveryPasswordResult';
  /** Login sucess message */
  message: Scalars['String']['output'];
};

export type RefreshInput = {
  /** User refresh token */
  refreshToken: Scalars['String']['input'];
};

export type RegisterDateInput = {
  activityId: Scalars['String']['input'];
  /** Date must be in iso 8601 format */
  date: Scalars['String']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type RequestBlockingDto = {
  data: Array<UpdateBlockedData>;
};

export type Responsible = {
  leaderId: Scalars['String']['input'];
  responsibleId: Scalars['String']['input'];
};

export type RoleEntity = {
  __typename?: 'RoleEntity';
  /** Role access type */
  accessType: Array<AccessType>;
  /** Role that allow app */
  allowApp?: Maybe<Scalars['Boolean']['output']>;
  /** Role created date */
  createdAt: Scalars['DateTime']['output'];
  /** Role description */
  description?: Maybe<Scalars['String']['output']>;
  /** Role ID as uuid xxxx-xxxxx-xxxxx-xxxx */
  id: Scalars['String']['output'];
  /** Role name */
  name: Scalars['String']['output'];
  /** Role Permissions grouped by access type */
  permissions?: Maybe<PermissionsGroupedByAccessType>;
  /** Role updated date */
  updatedAt: Scalars['DateTime']['output'];
  /** User ID associated with this Role */
  userId?: Maybe<Scalars['String']['output']>;
  /** Number of vinculated Users */
  vinculatedUsers?: Maybe<Scalars['Int']['output']>;
};

export type RoleFieldFilter = {
  createdAt?: InputMaybe<StringFilterInput>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<StringFilterInput>;
};

export type RoleFilters = {
  filter?: InputMaybe<RoleFieldFilter>;
  orderBy?: InputMaybe<RoleOrderByFilterInput>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type RoleOrderByFilterInput = {
  createdAt?: InputMaybe<OrderByEnum>;
  enabled?: InputMaybe<OrderByEnum>;
  name?: InputMaybe<OrderByEnum>;
  updatedAt?: InputMaybe<OrderByEnum>;
};

export type ScaffoldInput = {
  bookId?: InputMaybe<Scalars['String']['input']>;
  floor?: InputMaybe<Scalars['Int']['input']>;
  floorLength?: InputMaybe<Scalars['Float']['input']>;
  floorWidth?: InputMaybe<Scalars['Float']['input']>;
  hasLifeLine?: InputMaybe<Scalars['Boolean']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  length?: InputMaybe<Scalars['Float']['input']>;
  lifeLineLength?: InputMaybe<Scalars['Float']['input']>;
  projectType: ProjectType;
  type: ScaffoldingType;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type ScaffoldingEntity = {
  __typename?: 'ScaffoldingEntity';
  /** Book of the Activity */
  Book?: Maybe<Book>;
  /** asset collection of activity */
  assets?: Maybe<Array<Maybe<AssetEntity>>>;
  /** Scaffolding floor quantity */
  floor?: Maybe<Scalars['Int']['output']>;
  /** Scaffolding floor length size */
  floorLength?: Maybe<Scalars['Float']['output']>;
  /** Scaffolding floor width size */
  floorWidth?: Maybe<Scalars['Float']['output']>;
  /** Scaffolding height */
  height?: Maybe<Scalars['Float']['output']>;
  /** Scaffolding id */
  id: Scalars['String']['output'];
  /** Scaffolding length */
  length?: Maybe<Scalars['Float']['output']>;
  /** Scaffolding life line */
  lifeLine?: Maybe<Scalars['Boolean']['output']>;
  /** Scaffolding life line length */
  lifeLineLength?: Maybe<Scalars['Float']['output']>;
  /** Project Type (BOOK OR SPECIFIC) */
  projectType?: Maybe<ProjectType>;
  /** Scaffolding status */
  status: Scalars['String']['output'];
  /** Scaffolding tag */
  tag?: Maybe<Scalars['String']['output']>;
  /** Scaffolding type */
  type?: Maybe<ScaffoldingType>;
  /** Scaffolding width */
  width?: Maybe<Scalars['Float']['output']>;
};

export type ScaffoldingInput = {
  bookId?: InputMaybe<Scalars['String']['input']>;
  /** Scaffolding floor quantity */
  floor?: InputMaybe<Scalars['Int']['input']>;
  /** Scaffolding floor length size */
  floorLength?: InputMaybe<Scalars['Float']['input']>;
  /** Scaffolding floor width size */
  floorWidth?: InputMaybe<Scalars['Float']['input']>;
  /** Scaffolding height */
  height?: InputMaybe<Scalars['Float']['input']>;
  /** Scaffolding ID */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Scaffolding length */
  length?: InputMaybe<Scalars['Float']['input']>;
  /** Scaffolding life line */
  lifeLine?: InputMaybe<Scalars['Boolean']['input']>;
  /** Scaffolding life line length */
  lifeLineLength?: InputMaybe<Scalars['Float']['input']>;
  projectType: ProjectType;
  /** Scaffolding tag */
  tag?: InputMaybe<Scalars['String']['input']>;
  /** Scaffolding type */
  type?: InputMaybe<ScaffoldingType>;
  /** Scaffolding width */
  width?: InputMaybe<Scalars['Float']['input']>;
};

export enum ScaffoldingType {
  Balance = 'BALANCE',
  Doublebarrier = 'DOUBLEBARRIER',
  Guardrail = 'GUARDRAIL',
  Shoring = 'SHORING',
  Simple = 'SIMPLE'
}

export type SendRecoverPasswordByEmailInput = {
  /** Email to get recovery code */
  email: Scalars['String']['input'];
};

export type StringFilterInput = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  not?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type SuccessResult = {
  __typename?: 'SuccessResult';
  /** Success message */
  message: Scalars['String']['output'];
  /** Success result */
  success: Scalars['Boolean']['output'];
};

export type TeamInfoInput = {
  clientSupervisor: Scalars['Int']['input'];
  completionDate: Scalars['DateTime']['input'];
  completionTime: Scalars['String']['input'];
  leader: Scalars['Int']['input'];
  observation?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAccessTypeInput = {
  /** Role access type (GLOBAL | APP | BACKOFFICE) */
  accessType: Array<AccessType>;
  /** Role id */
  id: Scalars['String']['input'];
};

export type UpdateActivityInput = {
  /** activityObservation of the Activity */
  activityObservation?: InputMaybe<Scalars['String']['input']>;
  /** Activity Assembly type ( UNSCHEDULED / SCHEDULED / EMERGENCY / CANCELED) */
  activityType?: InputMaybe<AssemblyType>;
  /** Area ID */
  areaId?: InputMaybe<Scalars['String']['input']>;
  /** Activity assemblers quantity */
  assemblerQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Activity assistants quantity */
  assistantQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Activity aux assemblers quantity */
  auxAssemblerQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Contact of the Applicant */
  contactOfTheApplicant?: InputMaybe<Scalars['String']['input']>;
  /** Contract ID */
  contractId?: InputMaybe<Scalars['String']['input']>;
  /** end date */
  endDate?: InputMaybe<Scalars['String']['input']>;
  /** end time */
  endTime?: InputMaybe<Scalars['String']['input']>;
  /** Equipment name */
  equipmentName?: InputMaybe<Scalars['String']['input']>;
  /** Activity Execution Date must be of type ISO 8601 */
  executionDate?: InputMaybe<Scalars['String']['input']>;
  /** Activity executionObservation */
  executionObservation?: InputMaybe<Scalars['String']['input']>;
  /** Activity Id */
  id: Scalars['String']['input'];
  /** Inspector name */
  inspector?: InputMaybe<Scalars['String']['input']>;
  /** Leader assemblers quantity */
  leaderQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Activity Manager */
  manager?: InputMaybe<Scalars['String']['input']>;
  /** Name of the Applicant */
  nameOfTheApplicant?: InputMaybe<Scalars['String']['input']>;
  /** Activity Maintenance Order */
  om?: InputMaybe<Scalars['String']['input']>;
  /** scaffolding's */
  scaffoldingList?: InputMaybe<Array<ScaffoldingInput>>;
  /** Activity Status */
  status?: InputMaybe<ActivityStatus>;
  /** Activity Tag */
  tag?: InputMaybe<Scalars['String']['input']>;
  /** Activity teamStrengthObservation */
  teamStrengthObservation?: InputMaybe<Scalars['String']['input']>;
  /** Activity Work type (MOUNT / DISMOUNT) */
  type?: InputMaybe<ActivityType>;
  /** Visit Name */
  visitName?: InputMaybe<Scalars['String']['input']>;
  /** Visiting companion */
  visitingCompanion?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateActivityPtsInput = {
  /** Activity assemblers quantity */
  assemblerQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Activity assistants quantity */
  assistantQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Activity aux assemblers quantity */
  auxAssemblerQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Confirmation code to PTS */
  confirmationCode?: InputMaybe<Scalars['String']['input']>;
  /** Has pts on Activity */
  hasPts: Scalars['Boolean']['input'];
  /** Activity Id */
  id: Scalars['String']['input'];
  /** Infos if PTS is requested */
  infos?: InputMaybe<DefaultInfosInput>;
  /** Leader assemblers quantity */
  leaderQuantity?: InputMaybe<Scalars['Int']['input']>;
  obstacle?: InputMaybe<CreateActivityObstacleInput>;
  /** Infos if PTS has Obstacle */
  pts?: InputMaybe<DefaultInfosInput>;
  /** Infos after PTS has been resolved */
  resolvedInfos?: InputMaybe<DefaultInfosInput>;
  /** Observation about the team */
  teamStrengthObservation?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateActivityStatusInput = {
  /** Activity Id */
  id: Scalars['String']['input'];
  /** Activity status */
  status: ActivityStatus;
};

export type UpdateAreaInput = {
  contractId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBlockedData = {
  /** Activity Id */
  activityId: Scalars['String']['input'];
  request: DefaultInfo;
};

export type UpdateBlocksInput = {
  /** List of infos from blocks of activity if is Blocked */
  block?: InputMaybe<Array<BlockedInfosInput>>;
  /** Activity Id */
  id: Scalars['String']['input'];
  /** Activity is Blocked */
  isBlocked: Scalars['Boolean']['input'];
};

export type UpdateContractInput = {
  /** Contract show name */
  appName?: InputMaybe<Scalars['String']['input']>;
  /** Client Name */
  clientName?: InputMaybe<Scalars['String']['input']>;
  /** Client ID */
  codClient?: InputMaybe<Scalars['String']['input']>;
  /** Contract external ID */
  externalId?: InputMaybe<Scalars['String']['input']>;
  /** Contract finish date */
  finishDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Contract id */
  id: Scalars['String']['input'];
  /** ID (guid) Incumbent Collection */
  incumbentIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** ID (guid) Manager Collection */
  managerIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Contract number */
  number?: InputMaybe<Scalars['String']['input']>;
  /** Contract start date */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Contract totvs name */
  totvsName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMetaDto = {
  lastUpdate?: InputMaybe<Scalars['DateTime']['input']>;
  monthYear?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** Target Value as string */
  targetValue?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateObstacleInput = {
  /** Activity ID */
  activityId?: InputMaybe<Scalars['String']['input']>;
  /** Obstacle ID */
  obstacleId?: InputMaybe<Scalars['String']['input']>;
  /** Infos if activityIsBlocked */
  resolvedInfos: DefaultInfosInput;
};

export type UpdateParameterDto = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePasswordUserInput = {
  /** New User password */
  newPassword: Scalars['String']['input'];
  /** Current User password */
  password: Scalars['String']['input'];
};

export type UpdatePermissionInput = {
  code?: InputMaybe<PermissionCode>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePtsInput = {
  /** Activity assemblers quantity */
  assemblerQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Activity assistants quantity */
  assistantQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Activity aux assemblers quantity */
  auxAssemblerQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Confirmation code to PTS */
  confirmationCode?: InputMaybe<Scalars['String']['input']>;
  /** Has pts on Activity */
  hasPts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Activity Id */
  id: Scalars['String']['input'];
  /** Infos if PTS is requested */
  infos?: InputMaybe<DefaultInfosInput>;
  /** Leader assemblers quantity */
  leaderQuantity?: InputMaybe<Scalars['Int']['input']>;
  obstacle?: InputMaybe<CreateActivityObstacleInput>;
  /** Infos if PTS has Obstacle */
  pts?: InputMaybe<DefaultInfosInput>;
  /** Infos after PTS has been resolved */
  resolvedInfos?: InputMaybe<DefaultInfosInput>;
  /** Observation about the team */
  teamStrengthObservation?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRolePermissionsInput = {
  /** Role access app */
  allowApp: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
  /** Collection of UUIDs */
  permissionsBackofficeIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateStatusDto = {
  /** Scaffolding Id */
  id: Scalars['String']['input'];
  /** Scaffolding status */
  status: Scalars['String']['input'];
};

export type UpdateUserContractsInput = {
  /** User contracts id */
  contractIds: Array<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  /** User contracts */
  contractIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** User e-mail */
  email?: InputMaybe<Scalars['String']['input']>;
  /** User id */
  id: Scalars['String']['input'];
  /** User name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** User password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** User password confirmation */
  passwordConfirmation?: InputMaybe<Scalars['String']['input']>;
  /** role ID */
  roleId?: InputMaybe<Scalars['String']['input']>;
};

export type UploadActivityFilesInput = {
  /** Information Id */
  infoId: Scalars['String']['input'];
  uploads?: InputMaybe<Array<CustomUpload>>;
};

export type UpsertBookInput = {
  analyzedBy?: InputMaybe<Scalars['String']['input']>;
  clientWork?: InputMaybe<Scalars['String']['input']>;
  contractNumber?: InputMaybe<Scalars['String']['input']>;
  designer?: InputMaybe<Scalars['String']['input']>;
  draftsman?: InputMaybe<Scalars['String']['input']>;
  guidance?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  projectReference?: InputMaybe<Scalars['String']['input']>;
  projectType?: InputMaybe<ProjectType>;
  qrCodeRequester?: InputMaybe<Scalars['String']['input']>;
  scaffoldingId?: InputMaybe<Scalars['String']['input']>;
  scaffoldingType?: InputMaybe<ScaffoldingType>;
  validatedBy?: InputMaybe<Scalars['String']['input']>;
};

export type UpsertBookResponse = Book | GraphQlErrorResult;

export type User = {
  __typename?: 'User';
  /** Contracts */
  contracts?: Maybe<Array<Contract>>;
  /** User created at */
  createdAt: Scalars['DateTime']['output'];
  /** User e-mail */
  email: Scalars['String']['output'];
  /** User enabled */
  enabled: Scalars['Boolean']['output'];
  /** User ID */
  id: Scalars['ID']['output'];
  /** Is temp password */
  isTempPassword?: Maybe<Scalars['Boolean']['output']>;
  /** User name */
  name: Scalars['String']['output'];
  /** Role */
  role?: Maybe<RoleEntity>;
  /** User status */
  status: UserStatus;
  /** User updated at */
  updatedAt: Scalars['DateTime']['output'];
};

export enum UserStatus {
  Active = 'ACTIVE',
  Blocked = 'BLOCKED',
  Deleted = 'DELETED',
  Inactive = 'INACTIVE'
}

export enum ValidateEmailCodeEnum {
  RecoverPassword = 'RECOVER_PASSWORD'
}

export type ValidateEmailCodeInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  validateFor?: InputMaybe<ValidateEmailCodeEnum>;
};

export type ValidationError = {
  __typename?: 'ValidationError';
  errors: Array<ValidationKey>;
};

export type ValidationKey = {
  __typename?: 'ValidationKey';
  /** Key error */
  key: Scalars['String']['output'];
  /** Validation message */
  message: Scalars['String']['output'];
};

export type LoginAppMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginAppMutation = { __typename?: 'Mutation', loginApp: { __typename?: 'LoginSuccess', message: string, accessToken?: string | null, refreshToken?: string | null, isTempPassword?: boolean | null } };

export type RefreshTokenMutationVariables = Exact<{
  input: RefreshInput;
}>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'LoginSuccess', message: string, accessToken?: string | null, refreshToken?: string | null, isTempPassword?: boolean | null } };

export type ActiveUserQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveUserQuery = { __typename?: 'Query', activeUser: { __typename?: 'User', id: string, email: string, enabled: boolean, status: UserStatus, isTempPassword?: boolean | null, updatedAt: any, name: string, role?: { __typename?: 'RoleEntity', allowApp?: boolean | null, permissions?: { __typename?: 'PermissionsGroupedByAccessType', BACKOFFICE?: Array<{ __typename?: 'PermissionEntity', id: string, name: string, code: string }> | null } | null } | null } };

export type ActivitiesQueryVariables = Exact<{
  filters?: InputMaybe<GetActivityInput>;
}>;


export type ActivitiesQuery = { __typename?: 'Query', activities: { __typename?: 'PaginatedActivity', totalItems: number, items: Array<{ __typename?: 'Activity', id: string, om: string, type: ActivityType, executionDate: string, status: ActivityStatus, manager: string, assemblyType?: AssemblyType | null, createdAt: any, equipment?: { __typename?: 'Equipment', id: string, name: string } | null, scaffoldingList: Array<{ __typename?: 'ScaffoldingEntity', id: string, type?: ScaffoldingType | null, status: string, Book?: { __typename?: 'Book', id?: string | null, clientWork?: string | null, projectReference?: string | null, guidance?: string | null, draftsman?: string | null, designer?: string | null, analyzedBy?: string | null, validatedBy?: string | null, contractNumber?: string | null, qrCodeRequester?: string | null, scaffoldingType?: ScaffoldingType | null, status: BookStatus } | null }> }> } };


export const LoginAppDocument = gql`
    mutation LoginApp($input: LoginInput!) {
  loginApp(input: $input) {
    message
    accessToken
    refreshToken
    isTempPassword
  }
}
    `;
export type LoginAppMutationFn = Apollo.MutationFunction<LoginAppMutation, LoginAppMutationVariables>;

/**
 * __useLoginAppMutation__
 *
 * To run a mutation, you first call `useLoginAppMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginAppMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginAppMutation, { data, loading, error }] = useLoginAppMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginAppMutation(baseOptions?: Apollo.MutationHookOptions<LoginAppMutation, LoginAppMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginAppMutation, LoginAppMutationVariables>(LoginAppDocument, options);
      }
export type LoginAppMutationHookResult = ReturnType<typeof useLoginAppMutation>;
export type LoginAppMutationResult = Apollo.MutationResult<LoginAppMutation>;
export type LoginAppMutationOptions = Apollo.BaseMutationOptions<LoginAppMutation, LoginAppMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken($input: RefreshInput!) {
  refreshToken(input: $input) {
    message
    accessToken
    refreshToken
    isTempPassword
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const ActiveUserDocument = gql`
    query ActiveUser {
  activeUser {
    id
    email
    enabled
    status
    isTempPassword
    updatedAt
    name
    role {
      allowApp
      permissions {
        BACKOFFICE {
          id
          name
          code
        }
      }
    }
  }
}
    `;

/**
 * __useActiveUserQuery__
 *
 * To run a query within a React component, call `useActiveUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveUserQuery(baseOptions?: Apollo.QueryHookOptions<ActiveUserQuery, ActiveUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActiveUserQuery, ActiveUserQueryVariables>(ActiveUserDocument, options);
      }
export function useActiveUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveUserQuery, ActiveUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActiveUserQuery, ActiveUserQueryVariables>(ActiveUserDocument, options);
        }
export function useActiveUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ActiveUserQuery, ActiveUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ActiveUserQuery, ActiveUserQueryVariables>(ActiveUserDocument, options);
        }
export type ActiveUserQueryHookResult = ReturnType<typeof useActiveUserQuery>;
export type ActiveUserLazyQueryHookResult = ReturnType<typeof useActiveUserLazyQuery>;
export type ActiveUserSuspenseQueryHookResult = ReturnType<typeof useActiveUserSuspenseQuery>;
export type ActiveUserQueryResult = Apollo.QueryResult<ActiveUserQuery, ActiveUserQueryVariables>;
export const ActivitiesDocument = gql`
    query Activities($filters: GetActivityInput) {
  activities(filters: $filters) {
    items {
      id
      om
      type
      executionDate
      status
      manager
      assemblyType
      createdAt
      equipment {
        id
        name
      }
      scaffoldingList {
        id
        type
        status
        Book {
          id
          clientWork
          projectReference
          guidance
          draftsman
          designer
          analyzedBy
          validatedBy
          contractNumber
          qrCodeRequester
          scaffoldingType
          status
        }
      }
    }
    totalItems
  }
}
    `;

/**
 * __useActivitiesQuery__
 *
 * To run a query within a React component, call `useActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivitiesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useActivitiesQuery(baseOptions?: Apollo.QueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, options);
      }
export function useActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, options);
        }
export function useActivitiesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ActivitiesQuery, ActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ActivitiesQuery, ActivitiesQueryVariables>(ActivitiesDocument, options);
        }
export type ActivitiesQueryHookResult = ReturnType<typeof useActivitiesQuery>;
export type ActivitiesLazyQueryHookResult = ReturnType<typeof useActivitiesLazyQuery>;
export type ActivitiesSuspenseQueryHookResult = ReturnType<typeof useActivitiesSuspenseQuery>;
export type ActivitiesQueryResult = Apollo.QueryResult<ActivitiesQuery, ActivitiesQueryVariables>;